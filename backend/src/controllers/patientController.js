const Patient = require('../models/Patient');

// Get Patient Details
exports.getPatient = async (req, res) => {
  try {
    const patient = await Patient.findOne({ user: req.user.userId }).populate('user guardian');

    if (!patient) {
      return res.status(404).json({
        success: false,
        error: 'Patient not found'
      });
    }

    res.json({
      success: true,
      data: patient
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Update Patient Details
exports.updatePatient = async (req, res) => {
  try {
    const { dateOfBirth, gender, bloodGroup, address, medicalConditions, allergies, mobilityStatus, specialRequirements, emergencyContact } = req.body;

    let patient = await Patient.findOne({ user: req.user.userId });

    if (!patient) {
      return res.status(404).json({
        success: false,
        error: 'Patient not found'
      });
    }

    patient = await Patient.findByIdAndUpdate(
      patient._id,
      {
        dateOfBirth,
        gender,
        bloodGroup,
        address,
        medicalConditions,
        allergies,
        mobilityStatus,
        specialRequirements,
        emergencyContact
      },
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      data: patient,
      message: 'Patient details updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};
