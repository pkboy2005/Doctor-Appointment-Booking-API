const express = require('express');
const router = express.Router();
const { bookAppointment, fetchAppointments } = require('../controllers/appointmentController');
const validateAppointment = require('../middleware/validateAppointment');

router.post('/', validateAppointment, bookAppointment);
router.get('/', fetchAppointments);

module.exports = router;