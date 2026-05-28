const express = require('express');
const { createBooking, getUserBookings, getBooking, updateBooking, cancelBooking, rateBooking } = require('../controllers/bookingController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/', authMiddleware, createBooking);
router.get('/', authMiddleware, getUserBookings);
router.get('/:id', authMiddleware, getBooking);
router.put('/:id', authMiddleware, updateBooking);
router.post('/:id/cancel', authMiddleware, cancelBooking);
router.post('/:id/rate', authMiddleware, rateBooking);

module.exports = router;
