# 🏥 Doctor Appointment Booking API

This is a simple RESTful API for booking and managing doctor appointments. The system includes two user roles: **Patients** and **Doctors**.

---

## 👥 User Roles

- **Patient**

  - Can view doctors
  - Can book appointments

- **Doctor**

  - Can view their own appointments

⚠️ No authentication is implemented. User roles are simulated via **hardcoded IDs** or **mock headers**.

---

## 📆 Project Structure

```
doctor-booking-api/
├── controllers/
│   ├── appointmentController.js
│   ├── doctorController.js
│   └── patientController.js
├── routes/
│   └── index.js
├── services/
│   └── service.js
├── utils/
│   └── cache.js
├── data/
│   ├── doctors.js
│   ├── patients.js
│   └── appointments.js
├── Dockerfile
├── package.json
├── server.js
└── README.md
```

---

## 🔗 API Endpoints

### 🔹 Doctors

- `GET /api/doctors`

  - List all doctors
  - **Response:**
    ```json
    [
      { "id": "1", "name": "Dr. A", "specialization": "Cardiologist", "timings": "10 AM - 5 PM" }
    ]
    ```

- `GET /api/doctors/:id`

  - Get doctor details by ID
  - **Response:**
    ```json
    {
      "id": "2",
      "name": "Dr. B",
      "specialization": "Dermatologist",
      "timings": "11 AM - 4 PM"
    }
    ```

---

### 🔹 Appointments

- `POST /api/appointments`

  - Book a new appointment
  - **Request Body:**
    ```json
    {
      "doctor_id": "2",
      "patient_id": "6",
      "date": "2025-07-30",
      "time": "13:00"
    }
    ```

- `GET /api/appointments?doctor_id=2`

  - View all appointments for a doctor
  - **Response:**
    ```json
    {
      "total": 2,
      "page": 1,
      "limit": 5,
      "data": [
        {
          "id": "1753715284635",
          "doctor_id": "2",
          "patient_id": "6",
          "date": "2025-07-30",
          "time": "13:00"
        },
        {
          "id": "1753715494345",
          "doctor_id": "2",
          "patient_id": "6",
          "date": "2025-07-30",
          "time": "13:00"
        }
      ]
    }
    ```

- `GET /api/appointments?patient_id=6`

  - View all appointments for a patient
  - **Response:**
    ```json
    {
      "total": 2,
      "page": 1,
      "limit": 5,
      "data": [
        {
          "id": "1753715284635",
          "doctor_id": "2",
          "patient_id": "6",
          "date": "2025-07-30",
          "time": "13:00"
        },
        {
          "id": "1753715494345",
          "doctor_id": "2",
          "patient_id": "6",
          "date": "2025-07-30",
          "time": "13:00"
        }
      ]
    }
    ```

Supports pagination with `?page=1&limit=5`

---

## 🧐 In-Memory Data

- Doctors, patients, and appointments are stored using simple JS arrays
- No external database setup is required

---

## 🚀 Features

- RESTful API design
- Simple in-memory storage
- Clean architecture with separated controllers and services
- Basic validation and error handling
- Pagination support
- Dockerized setup

---

## 🐳 Docker Setup

### Build the Docker image

```bash
docker build -t doctor-api .
```

### Run the container

```bash
docker run -p 3001:3001 doctor-api
```

### Test the API

```bash
curl http://localhost:3001/api/doctors
```

Or use Postman/Swagger

---

## ⚠️ Error Handling

- Missing fields return:

  ```json
  { "success": false, "message": "Missing required fields" }
  ```

- Invalid doctor or patient ID returns:

  ```json
  { "success": false, "message": "Doctor not found" }
  ```

---

## 📟️ Walkthrough (Bonus)

(Optional but recommended) Record a 2–3 minute walkthrough video covering:

- Folder and file structure
- Each endpoint demo (GET, POST)
- Logic overview

---

## 👨‍💻 Author

**Piyush Sharma**\
B.Tech CSE, Noida Institute of Engineering and Technology

---

## 📄 License

This project is intended for academic and learning use only.

