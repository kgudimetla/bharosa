const ServiceBooking = require('../models/ServiceBooking');
const Patient = require('../models/Patient');

// Create Booking
exports.createBooking = async (req, res) => {
  try {
    const { appointmentDate, appointmentTime, hospitalName, hospitalAddress, doctorName, specialization, serviceType, vehicleType, totalFee, specialRequirements, notes } = req.body;

    // Get patient
    const patient = await Patient.findOne({ user: req.user.userId });
    if (!patient) {
      return res.status(404).json({
        success: false,
        error: 'Patient profile not found. Please complete patient registration first.'
      });
    }

    const booking = await ServiceBooking.create({
      patient: patient._id,
      appointmentDate,
      appointmentTime,
      hospitalName,
      hospitalAddress,
      doctorName,
      specialization,
      serviceType,
      vehicleType,
      totalFee,
      specialRequirements,
      notes,
      status: 'pending'
    });

    res.status(201).json({
      success: true,
      data: booking,
      message: 'Booking created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get All Bookings for User
exports.getUserBookings = async (req, res) => {
  try {
    const patient = await Patient.findOne({ user: req.user.userId });
    
    if (!patient) {
      return res.json({
        success: true,
        data: []
      });
    }

    const bookings = await ServiceBooking.find({ patient: patient._id })
      .populate('patient escort')
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      data: bookings
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get Booking Details
exports.getBooking = async (req, res) => {
  try {
    const booking = await ServiceBooking.findById(req.params.id)
      .populate('patient escort');

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    res.json({
      success: true,
      data: booking
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Update Booking
exports.updateBooking = async (req, res) => {
  try {
    let booking = await ServiceBooking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    booking = await ServiceBooking.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      data: booking,
      message: 'Booking updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Cancel Booking
exports.cancelBooking = async (req, res) => {
  try {
    const booking = await ServiceBooking.findByIdAndUpdate(
      req.params.id,
      { status: 'cancelled' },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    res.json({
      success: true,
      data: booking,
      message: 'Booking cancelled successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Rate Booking
exports.rateBooking = async (req, res) => {
  try {
    const { rating, feedback } = req.body;

    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        error: 'Rating must be between 1 and 5'
      });
    }

    const booking = await ServiceBooking.findByIdAndUpdate(
      req.params.id,
      { rating, feedback },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: 'Booking not found'
      });
    }

    res.json({
      success: true,
      data: booking,
      message: 'Rating submitted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
