const appointments = require('../models/Appointment');
const doctors = require('../models/Doctor');

const cache = new Map();

exports.createAppointment = ({ doctor_id, patient_id, date, time }) => {
  // Check if all required fields are provided
  if (!doctor_id || !patient_id || !date || !time) {
    return {
      success: false,
      message: 'All fields (doctor_id, patient_id, date, time) are required',
    };
  }

  // Check if doctor exists
  const doctorExists = doctors.find(doc => doc.id === doctor_id);
  if (!doctorExists) {
    return {
      success: false,
      message: 'Doctor not found',
    };
  }

  // Check if appointment slot is already booked
  const alreadyBooked = appointments.find(
    appt =>
      appt.doctor_id === doctor_id &&
      appt.date === date &&
      appt.time === time
  );
  if (alreadyBooked) {
    return {
      success: false,
      message: 'This time slot is already booked',
    };
  }


  const newAppointment = {
    id: Date.now().toString(),
    doctor_id,
    patient_id,
    date,
    time,
  };

  appointments.push(newAppointment);
  cache.clear();

  return {
    success: true,
    appointment: newAppointment,
  };
};


exports.getAppointments = (doctor_id, patient_id, page, limit) => {
  const cacheKey = `${doctor_id || 'all'}-${patient_id || 'all'}-${page}-${limit}`;
  if (cache.has(cacheKey)) return cache.get(cacheKey);

  let results = appointments;
  if (doctor_id) results = results.filter(a => a.doctor_id === doctor_id);
  if (patient_id) results = results.filter(a => a.patient_id === patient_id);

  const start = (page - 1) * limit;
  const paginated = results.slice(start, start + parseInt(limit));
  const response = { total: results.length, page: parseInt(page), limit: parseInt(limit), data: paginated };

  cache.set(cacheKey, response);
  return response;
};