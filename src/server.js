const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const doctorRoutes = require('./routes/doctorRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
const { errorHandler } = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(helmet());
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Welcome to the Doctor Appointment API');
});


app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'API is running',
    uptime: process.uptime()
  });
});

app.use('/api/doctors', doctorRoutes);
app.use('/api/appointments', appointmentRoutes);

app.use('*', (req, res) => {
  res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));