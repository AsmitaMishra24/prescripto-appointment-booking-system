# Prescripto - Appointment Booking System🏥

## 📝 Project Overview

Prescripto is a full-stack web application that allows patients to book appointments with doctors, doctors to manage their schedules, and admins to oversee the platform. Built using the **MERN stack**, it simplifies and streamlines the medical appointment process.

## ✨ Features

### Patient

- Register and log in to the platform
- Search for doctors based on specialization
- View doctor profiles along with availability
- Book appointments with selected doctors
- Cancel upcoming appointments if needed
- View status and history of all appointments
- Make payments securely via Stripe and Razorpay

### Doctor

- Log in to the platform
- Set and update their availability
- View appointment requests from patients
- Approve or reject appointments
- Manage confirmed appointments
- Cancel or approve existing appointments
- View dashboard with total income, appointments, and patient count

### Admin

- Log in to a secure admin dashboard
- View the list of all registered doctors
- Add new doctor profiles manually
- Monitor and manage all appointment data
- Control user access and manage platform statistics
- Cancel any doctor’s appointment if necessary
- Set and update doctors’ availability
- View total counts of doctors, appointments, and patients


## 🧰 Tech Stack

**Frontend** - React.js, Tailwind CSS, Toastify, Axios     
**Backend** - Node.js, Express.js  
**Authentication & Security** - JWT (JSON Web Token), Bcrypt.js  
**Database** - MongoDB  
**Storage** - Cloudinary (for image/file upload)  
**Payment Integration** - Stripe, Razorpay  


## ✅ Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) – for running the backend server  
- [MongoDB](https://www.mongodb.com/) – as the database  
- [Stripe](https://stripe.com/docs/keys) account – for payment integration  
- [Razorpay](https://razorpay.com/docs/api/) account – for additional payment gateway support

## ⚙️ Setup Instructions

### 1. Clone the Repository
First, clone the repository to your local machine:
```bash
git clone https://github.com/AsmitaMishra24/prescripto-appointment-booking-system.git
cd prescripto-appointment-booking-system
```

### 2. Set Up the Backend
Navigate to the backend folder and install the required dependencies:
```bash
cd backend
npm install
```

Create a ```.env``` file in the backend folder with the following configuration:
```.env
# General Config
PORT=5000
NODE_ENV=development
CURRENCY=INR
JWT_SECRET=your_jwt_secret_key

# Admin Panel Credentials
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=greatstack123

# MongoDB Setup
MONGODB_URI=your_mongodb_connection_string

# Cloudinary Setup
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key

# Razorpay Payment Integration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key

# Stripe Payment Integration
STRIPE_SECRET_KEY=your_stripe_secret_key

# App URLs (optional but helpful)
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:5174

```

Start the backend server:
```bash
npm run server
```
This will start the server on ```http://localhost:4000```.


### 3. Set Up the Frontend
Open another terminal, navigate to the frontend folder, and install the required dependencies:
```bash
cd frontend
npm install
```

Create a ```.env``` file in the frontend folder:
```.env
VITE_BACKEND_URL=http://localhost:4000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

Start the frontend:
```bash
npm run dev
```

This will start the frontend on ```http://localhost:5173```.

### 4. Set Up the Admin Panel
Open another terminal, navigate to the admin folder, and install the required dependencies:
```bash
cd admin
npm install
```
Create a ```.env``` file in the admin folder:
```env
VITE_CURRENCY=₹
VITE_BACKEND_URL=http://localhost:4000
```

Start the admin panel:
```bash
npm run dev
```

This will start the admin panel on ```http://localhost:5174```.


### 5. Open the Application

Backend: ```http://localhost:4000```

Frontend: ```http://localhost:5173```

Admin Panel: ```http://localhost:5174```
 
## 📝 Notes

1. Ensure that the `.env` variables are correctly configured in the `backend` folder.
2. Make sure MongoDB, Stripe, and Razorpay services are active and properly connected.

## 👩‍💻 Developer

This project was developed by - [Asmita Mishra](https://github.com/AsmitaMishra24) 

## 📬 Contact

For any questions or feedback, feel free to reach out at:
- **GitHub**: [AsmitaMishra](https://github.com/AsmitaMishra24)
- **LinkedIn**: [Asmita Mishra](https://www.linkedin.com/in/asmitamishra1/)
