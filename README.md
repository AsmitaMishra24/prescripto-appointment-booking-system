# Prescripto - Appointment Booking System🏥

## 📝 Project Overview

Prescripto is a full-stack web application that allows patients to book appointments with doctors, doctors to manage their schedules, and admins to oversee the platform. Built using the **MERN stack**, it simplifies and streamlines the medical appointment process.

## ✨ Features

### Patient
- Register and log in to the platform
- Browse and search doctors by specialization
- View doctor profiles and availability
- Book appointments with selected doctors
- Cancel upcoming appointments
- View appointment status and history

### Doctor
- Log in to the platform
- Create and manage doctor profile
- Set and update available time slots
- View incoming appointment requests
- Approve or reject patient appointments
- Manage scheduled appointments

### Admin
- Log in to an admin dashboard
- View list of all registered users and doctors
- Approve or verify doctor registrations
- View and monitor all appointment data
- Manage access and platform statistics

## 🧰 Tech Stack

**Frontend** - React.js, Tailwind CSS, Axios  
**Backend** - Node.js, Express.js  
**Authentication & Security** - JWT (JSON Web Token), Bcrypt.js  
**Database** - MongoDB  
**Storage** - Cloudinary (for image/file upload)  
**Payment Integration** - Stripe, Razorpay  


## ✅ Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Stripe](https://stripe.com/docs/keys) account for payment integration

## ⚙️ Setup Instructions

### 1. Clone the Repository
First, clone the repository to your local machine:
```bash
git clone https://github.com/AsmitaMishra24/Eatzy.git
cd Eatzy
```

### 2. Set Up the Backend
Navigate to the backend folder and install the required dependencies:
```bash
cd backend
npm install
```

Create a ```.env``` file in the backend folder with the following configuration:
```.env
PORT=4000
NODE_ENV=development
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL="http://localhost:5174"
BACKEND_URL="http://localhost:4000"
```

Start the backend server:
```bash
npm run server
```
This will start the server on ```http://localhost:4000```.


### 3. Set Up the Admin Panel
Open another terminal, navigate to the admin folder, and install the required dependencies:
```bash
cd admin
npm install
```

Start the admin panel:
```bash
npm run dev
```

This will start the admin panel on ```http://localhost:5173```.

### 4. Set Up the Frontend
Open another terminal, navigate to the frontend folder, and install the required dependencies:
```bash
cd frontend
npm install
```

Start the frontend:
```bash
npm run dev
```

This will start the frontend on ```http://localhost:5174```.

### 5. Open the Application

Backend: ```http://localhost:4000```

Admin Panel: ```http://localhost:5173```

Frontend: ```http://localhost:5174```

## 📸 Screenshots

### User Side

<details> <summary><strong>Homepage</strong></summary> <img src="https://github.com/user-attachments/assets/3a19b45a-b501-4d36-a768-69145ae4f888"/> </details> 
<details> <summary><strong>Login Page</strong></summary> <img src="https://github.com/user-attachments/assets/2bc2970d-e2a0-4e09-b39d-132d6959f079"/> </details> 
<details> <summary><strong>Explore Menu</strong></summary> <img src="https://github.com/user-attachments/assets/6de90521-89fc-452b-8e9c-0bed795a3693"/> </details> 
<details> <summary><strong>Cart Page</strong></summary> <img src="https://github.com/user-attachments/assets/516c7292-150c-4bcb-8f72-8d4b1634f285"/> </details> 
<details> <summary><strong>Make Payment Page</strong></summary> <img src="https://github.com/user-attachments/assets/9f5e273e-7fde-43b3-ba3d-6bd3a79a8cde"/> </details> 
<details> <summary><strong>Stripe Payment Gateway</strong></summary> <img src="https://github.com/user-attachments/assets/7ca90bcd-d065-4e64-a524-929c6bb265e9"/> </details> 
<details> <summary><strong>Track Order & Order History</strong></summary> <img src="https://github.com/user-attachments/assets/95926a2b-8758-42fd-9923-a0fcb54e035a"/> </details>

---

### Admin Side

<details> <summary><strong>Add Item Page</strong></summary> <img src="https://github.com/user-attachments/assets/46f48ffc-a53d-43c2-aa31-ad51290f1a86"/> </details> 
<details> <summary><strong>List of Items Page</strong></summary> <img src="https://github.com/user-attachments/assets/460c7c27-444e-43d3-958b-aa8158342016"/> </details> 
<details> <summary><strong>Order Handling Page</strong></summary> <img src="https://github.com/user-attachments/assets/ec4a186f-9485-4c76-82e1-f8a47537027a"/> </details>
  
## 📝 Notes

1. Ensure that the `.env` variables are correctly configured in the backend.
2. Make sure MongoDB and Stripe services are active and connected.

## 👩‍💻 Developer

This project was developed by [Asmita Mishra](https://github.com/AsmitaMishra24).

## 📬 Contact

For any questions or feedback, feel free to reach out at:
- **GitHub**: [AsmitaMishra](https://github.com/AsmitaMishra24)
- **LinkedIn**: [Asmita Mishra](https://www.linkedin.com/in/asmitamishra1/)
