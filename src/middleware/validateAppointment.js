module.exports = function (req, res, next) {
  const { doctor_id, patient_id, date, time } = req.body;
  if (!doctor_id || !patient_id || !date || !time) {
    return res.status(400).json({ success: false, message: 'All fields (doctor_id, patient_id, date, time) are required' });
  }
  next();
};