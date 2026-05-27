# Bharosa - Patient Escort Service

🤝 **Bharosa** is a compassionate third-party service that escorts patients to hospital appointments and safely drops them back home. Designed for elderly and vulnerable individuals whose family members are unavailable (e.g., children living abroad).

## Overview

Bharosa bridges the gap for:
- Elderly parents in India with children living abroad
- Patients without immediate family support
- Individuals needing safe, reliable hospital escort service

## Features

### User Management
- **Patient Registration**: Elderly/vulnerable patients register with medical and contact details
- **Caregiver/Guardian Registration**: Family members or trusted contacts register as caregivers
- **Service Provider Registration**: Bharosa team members register as escorts

### Service Booking
- **Appointment Scheduling**: Patients book hospital visits with date and time
- **Service Details**: Medical condition, mobility needs, special requirements
- **Vehicle Selection**: Choose between:
  - 🚗 5-seater vehicle (for patients with mobility)
  - 🚐 7-seater vehicle (for patients with companion)
  - 🚑 Ambulance (for critical/bed-ridden patients)

### Core Functions
- Pickup and drop-off scheduling
- Patient health & mobility assessment
- Payment processing
- Notification system (SMS/Email to guardians)
- Escort tracking and safety features
- Service ratings and feedback

## Tech Stack

- **Frontend**: React + TypeScript + Tailwind CSS (Responsive UI)
- **Backend**: Node.js + Express (REST API)
- **Database**: MongoDB (Patient records, bookings, payments)
- **Authentication**: JWT + Email verification
- **Notifications**: Twilio (SMS), Nodemailer (Email)
- **Payment**: Stripe integration

## Project Structure

```
bharosa/
├── backend/
│   ├── src/
│   │   ├── models/           # Database schemas
│   │   ├── routes/           # API endpoints
│   │   ├── controllers/      # Business logic
│   │   ├── middleware/       # Auth, validation
│   │   ├── utils/            # Helper functions
│   │   └── app.js            # Express app
│   ├── package.json
│   └── .env.example
├── frontend/
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/            # Page components
│   │   ├── hooks/            # Custom hooks
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── .gitignore
└── README.md
```

## Getting Started

See backend and frontend README files for setup instructions.

## License

MIT
