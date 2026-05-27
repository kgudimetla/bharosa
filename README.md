# 🤝 Bharosa - Patient Hospital Escort Service

**A compassionate third-party service connecting vulnerable patients with reliable escorts for safe hospital visits**

---

## 📋 Project Overview

Bharosa is designed for elderly and vulnerable individuals in India whose family members (especially children living abroad) are unavailable to accompany them to hospital appointments. The service provides:

- **Safe, trained escorts** to accompany patients
- **Flexible vehicle options** (5-seater, 7-seater, ambulance)
- **Transparent pricing** with no hidden charges
- **Real-time notifications** to family members
- **Quality assurance** through ratings and feedback

---

## 🎯 Key Features

### User Management
- ✅ Patient Registration (3-step form with medical details)
- ✅ Guardian/Family Registration (for relatives abroad)
- ✅ Escort Staff Management (for Bharosa team)
- ✅ Admin Dashboard (for service management)

### Service Booking
- ✅ Hospital appointment scheduling
- ✅ Vehicle type selection with pricing
- ✅ Doctor and specialist information
- ✅ Special requirements documentation
- ✅ Booking status tracking

### Patient Safety
- ✅ Medical history tracking
- ✅ Emergency contact management
- ✅ Mobility status assessment
- ✅ Allergies and medications logging

### Payment & Ratings
- ✅ Transparent fee structure
- ✅ Payment status tracking
- ✅ Service ratings (1-5 stars)
- ✅ Feedback system

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, React Router, Axios, Tailwind CSS, Vite |
| **Backend** | Node.js, Express.js, MongoDB, Mongoose |
| **Authentication** | JWT (JSON Web Tokens) |
| **Database** | MongoDB (local or Atlas) |
| **Security** | Bcrypt password hashing |
| **Future** | Stripe (payments), Twilio (SMS), Nodemailer (email) |

---

## 📁 Project Structure

```
bharosa/
├── 📦 backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js          # MongoDB connection
│   │   ├── models/
│   │   │   ├── User.js              # User schema with auth
│   │   │   ├── Patient.js           # Patient profile schema
│   │   │   └── ServiceBooking.js    # Booking schema
│   │   ├── controllers/
│   │   │   ├── authController.js    # Register & Login
│   │   │   ├── patientController.js # Patient CRUD
│   │   │   └── bookingController.js # Booking operations
│   │   ├── routes/
│   │   │   ├── auth.js
│   │   │   ├── patients.js
│   │   │   └── bookings.js
│   │   ├── middleware/
│   │   │   └── auth.js              # JWT verification
│   │   ├── utils/
│   │   │   └── validators.js        # Email, phone validation
│   │   └── app.js                   # Express app
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
├── 🎨 frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── Navbar.jsx           # Navigation bar
│   │   ├── pages/
│   │   │   ├── Home.jsx             # Landing page
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   ├── PatientRegister.jsx
│   │   │   │   └── GuardianRegister.jsx
│   │   │   ├── Dashboard/
│   │   │   │   └── PatientDashboard.jsx
│   │   │   └── Booking/
│   │   │       ├── BookingForm.jsx  # 3-step booking form
│   │   │       └── BookingList.jsx
│   │   ├── App.jsx                  # Main app component
│   │   ├── main.jsx                 # Entry point
│   │   └── index.css                # Tailwind + custom styles
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── README.md
│
├── SETUP.md                          # Complete setup guide
├── README.md                         # Project overview
└── .gitignore                        # Git ignore file
```

---

## 🚀 Quick Start Guide

### Prerequisites
- **Node.js** v14 or higher
- **MongoDB** (local installation or MongoDB Atlas account)
- **npm** or **yarn**

### Backend Setup

```bash
# 1. Navigate to backend directory
cd backend

# 2. Install dependencies
npm install

# 3. Create environment file
cp .env.example .env

# 4. Update .env with your settings
# MONGODB_URI=mongodb://localhost:27017/bharosa
# JWT_SECRET=your_secret_key

# 5. Start development server
npm run dev
# Backend runs on http://localhost:5000
```

### Frontend Setup

```bash
# 1. Navigate to frontend directory
cd frontend

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
# Frontend runs on http://localhost:5173
```

---

## 📡 API Endpoints

### Authentication Endpoints
```
POST   /api/auth/register       - Register new user (patient/guardian)
POST   /api/auth/login          - Login with email and password
```

### Patient Endpoints
```
GET    /api/patients            - Get current patient profile
PUT    /api/patients            - Update patient profile
```

### Booking Endpoints
```
GET    /api/bookings            - Get all user bookings
POST   /api/bookings            - Create new booking
GET    /api/bookings/:id        - Get booking details
PUT    /api/bookings/:id        - Update booking
POST   /api/bookings/:id/cancel - Cancel booking
POST   /api/bookings/:id/rate   - Submit rating and feedback
```

---

## 💾 Database Models

### User Model
```javascript
{
  fullName: String,
  email: String (unique),
  phone: String (unique, 10 digits),
  password: String (hashed),
  userType: ['patient', 'guardian', 'escort', 'admin'],
  isVerified: Boolean,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Patient Model
```javascript
{
  user: ObjectId (ref: User),
  dateOfBirth: Date,
  gender: ['Male', 'Female', 'Other'],
  bloodGroup: String,
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String
  },
  medicalConditions: [String],
  allergies: [String],
  mobilityStatus: ['Independent', 'Assisted', 'Wheelchair', 'Bed-ridden'],
  specialRequirements: String,
  emergencyContact: {
    name: String,
    relationship: String,
    phone: String
  },
  guardian: ObjectId (ref: User),
  createdAt: Date,
  updatedAt: Date
}
```

### ServiceBooking Model
```javascript
{
  patient: ObjectId (ref: Patient),
  appointmentDate: Date,
  appointmentTime: String,
  hospitalName: String,
  hospitalAddress: String,
  doctorName: String,
  specialization: String,
  serviceType: ['checkup', 'follow-up', 'test', 'procedure', 'emergency'],
  vehicleType: ['5-seater', '7-seater', 'ambulance'],
  pickupTime: String,
  estimatedReturnTime: String,
  escort: ObjectId (ref: User),
  status: ['pending', 'confirmed', 'in-progress', 'completed', 'cancelled'],
  specialRequirements: String,
  notes: String,
  totalFee: Number,
  paymentStatus: ['pending', 'paid', 'refunded'],
  paymentId: String,
  rating: Number (1-5),
  feedback: String,
  createdAt: Date,
  updatedAt: Date
}
```

---

## 🔐 Security Features

- ✅ **Password Hashing** - Bcrypt with 10 salt rounds
- ✅ **JWT Authentication** - Secure token-based auth
- ✅ **Input Validation** - Email, phone, and data validation
- ✅ **CORS Protection** - Configured CORS middleware
- ✅ **Error Handling** - Comprehensive error handling

---

## 📋 User Journey

### Patient's Journey
1. **Register** → Provide medical details & emergency contact
2. **Login** → Access dashboard
3. **View Dashboard** → See booking stats
4. **Book Service** → Select hospital, time, vehicle
5. **Track Status** → Monitor booking progress
6. **Rate Service** → Provide feedback after completion

### Guardian's Journey
1. **Register** → Create account as family member
2. **Login** → Access monitoring dashboard
3. **Monitor** → Track patient's bookings
4. **Receive Updates** → SMS/Email notifications

---

## 🎨 UI/UX Features

- **Responsive Design** - Works on desktop, tablet, mobile
- **Intuitive Navigation** - Clear menu and user flows
- **Multi-step Forms** - 3-step patient registration & booking
- **Real-time Feedback** - Success/error messages
- **Status Indicators** - Color-coded booking status
- **Professional Styling** - Tailwind CSS for modern look

---

## 🚀 Future Enhancements

### Phase 2
- [ ] Email notifications (Nodemailer integration)
- [ ] SMS notifications (Twilio integration)
- [ ] Payment processing (Stripe integration)
- [ ] Admin dashboard for staff management

### Phase 3
- [ ] Real-time GPS tracking
- [ ] Live chat support
- [ ] Advanced search/filtering
- [ ] Hospital partnerships

### Phase 4
- [ ] Mobile app (React Native)
- [ ] AI-based recommendations
- [ ] Prescription management
- [ ] Telemedicine integration

---

## 📊 Sample API Requests

### Register as Patient
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Rajesh Kumar",
    "email": "rajesh@example.com",
    "phone": "9876543210",
    "password": "SecurePass123",
    "userType": "patient",
    "dateOfBirth": "1955-03-20",
    "gender": "Male",
    "bloodGroup": "O+",
    "mobilityStatus": "Assisted",
    "address": {
      "street": "456 Park Lane",
      "city": "Bangalore",
      "state": "Karnataka",
      "postalCode": "560034"
    },
    "emergencyContact": {
      "name": "Priya Kumar",
      "relationship": "Daughter",
      "phone": "9876543211"
    }
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "rajesh@example.com",
    "password": "SecurePass123"
  }'
```

### Create Booking
```bash
curl -X POST http://localhost:5000/api/bookings \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "appointmentDate": "2026-06-15",
    "appointmentTime": "14:30",
    "hospitalName": "Apollo Hospitals",
    "hospitalAddress": "123 Medical Complex, Bangalore",
    "doctorName": "Dr. Arjun Sharma",
    "specialization": "Cardiology",
    "serviceType": "follow-up",
    "vehicleType": "5-seater",
    "totalFee": 300,
    "specialRequirements": "Elevator access needed"
  }'
```

---

## 📞 Support & Contact

- **GitHub**: [kgudimetla/bharosa](https://github.com/kgudimetla/bharosa)
- **Issues**: Create an issue in the repository
- **Pull Requests**: Contributions welcome!

---

## 📄 License

MIT License - Feel free to use this project for commercial or personal purposes.

---

## 🎉 Thank You

Thank you for using Bharosa! We're committed to providing safe, reliable, and compassionate healthcare escort services for vulnerable patients and their families.

**Together, we make healthcare accessible! 🤝**

---

### Contributors
- Project Lead: Kiran Gudimetla
- Repository: kgudimetla/bharosa

### Last Updated
May 27, 2026
