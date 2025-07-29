const { getAllDoctors, getDoctorById } = require('../services/doctorService');

exports.getDoctors = (req, res) => {
  const doctors = getAllDoctors();
  res.json(doctors);
};

exports.getDoctor = (req, res) => {
  const doctor = getDoctorById(req.params.id);
  if (!doctor) return res.status(404).json({ success: false, message: 'Doctor not found' });
  res.json(doctor);
};