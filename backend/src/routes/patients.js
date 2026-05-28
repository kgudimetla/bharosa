const express = require('express');
const { getPatient, updatePatient } = require('../controllers/patientController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.get('/', authMiddleware, getPatient);
router.put('/', authMiddleware, updatePatient);

module.exports = router;
