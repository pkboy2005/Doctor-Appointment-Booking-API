const { createAppointment, getAppointments } = require('../services/appointmentService');

exports.bookAppointment = (req, res) => {
  const result = createAppointment(req.body);
  if (!result.success) return res.status(400).json(result);
  res.status(201).json(result);
};

exports.fetchAppointments = (req, res) => {
  const { doctor_id, patient_id, page = 1, limit = 5 } = req.query;
  const results = getAppointments(doctor_id, patient_id, page, limit);
  res.json(results);
};