# 🏥 Doctor Appointment Booking API

This is a simple RESTful API that allows users to book and manage doctor appointments. It supports operations like viewing doctors, patients, and creating or viewing appointments.

---

## 📁 Project Structure

doctor-booking-api/
├── controllers/
│ ├── appointmentController.js
│ ├── doctorController.js
│ └── patientController.js
├── routes/
│ └── index.js
├── services/
│ └── service.js
├── utils/
│ └── cache.js
├── data/
│ ├── doctors.js
│ ├── patients.js
│ └── appointments.js
├── Dockerfile
├── package.json
├── server.js
└── README.md


---

## 🚀 Features

- View list of doctors and patients
- Book a new appointment
- View all or filtered appointments
- Supports basic pagination
- Simple in-memory data (no DB setup)
- Dockerized for easy setup

---

## 🔗 API Endpoints

### 🔹 Doctors
- `GET /api/doctors`  
  Get all doctors

### 🔹 Patients
- `GET /api/patients`  
  Get all patients

### 🔹 Appointments
- `POST /api/appointments`  
  Book an appointment  
  **Request Body Example**:
  ```json
  {
    "doctor_id": "2",
    "patient_id": "6",
    "date": "2025-07-30",
    "time": "13:00"
  }

GET /api/appointments
Get all appointments with optional filters
Query Parameters:

doctor_id — filter by doctor

patient_id — filter by patient

date — filter by date

Example:
http:localhost:3001/api/appointments?doctor_id=2

🐳 Docker Setup
🔧 Build the Docker image
bash
Copy
Edit
docker build -t doctor-api .
▶️ Run the Docker container
bash
Copy
Edit
docker run -p 3001:3001 doctor-api
🌐 Access the API
bash
Copy
Edit
http://localhost:3001/api/doctors
📦 Install & Run Locally (Without Docker)
bash
Copy
Edit
npm install
node server.js



🧑‍💻 Author
Piyush Sharma
B.Tech CSE, Noida Institute of Engineering and Technology
Project for Backend API Submission

📄 License
This project is for learning and academic use only.
