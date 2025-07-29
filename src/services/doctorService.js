const doctors = require('../models/Doctor');

exports.getAllDoctors = () => doctors;

exports.getDoctorById = (id) => doctors.find(doc => doc.id === id);