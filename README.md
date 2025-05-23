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
 
## 📸 Screenshots

## Screenshots

<details>
  <summary><strong>User Side👤</strong></summary>

![1](https://github.com/user-attachments/assets/021b5100-4003-4243-9346-e2a923ad64d6)  
![2](https://github.com/user-attachments/assets/5e4a8e27-139b-45e7-863c-739731d3ae3c)  
![3](https://github.com/user-attachments/assets/9869c357-9152-4a9b-92a7-50b47b698571)  
![4](https://github.com/user-attachments/assets/ceb1169f-e195-4ebe-b3da-3d19451b2382)  
![5](https://github.com/user-attachments/assets/8064e7a8-a6b6-4f0d-b394-8409b2d09198)  
![6](https://github.com/user-attachments/assets/cf89c2b9-1488-4761-af7b-0c326a665b12)  
![7](https://github.com/user-attachments/assets/b6279f09-ba97-4f65-a60d-0726a61d17e6)  
![8](https://github.com/user-attachments/assets/0479b061-fa9d-4e82-a033-58d6b076ce9c)  
![9](https://github.com/user-attachments/assets/215c463c-226e-4ce2-b29d-f23081d22ea4)  
![10](https://github.com/user-attachments/assets/989089b7-bd97-4b9b-8b11-e6ce241f069e)  
![11](https://github.com/user-attachments/assets/4b20a0b4-04d3-45f5-88e9-9e762cfe3d82)  
![12](https://github.com/user-attachments/assets/bc490e64-f314-447c-90a5-55bf71bf1dc6)  
![13](https://github.com/user-attachments/assets/0f70157b-af1a-4fa2-8ecf-56c0a3ffb427)  
![14](https://github.com/user-attachments/assets/abb101cb-97d5-4edd-912d-bd0c64add816)  
![15](https://github.com/user-attachments/assets/8e8425e9-3d84-4a6e-a6c6-8864509aef22)  
![16](https://github.com/user-attachments/assets/53ac569d-a7a7-4e17-be61-3909f7245cce)  
![17](https://github.com/user-attachments/assets/abc3d9c4-6603-4d7e-b966-1b09b52889a3)

</details>

<details>
  <summary><strong>Doctor Side👨‍⚕️</strong></summary>

![18](https://github.com/user-attachments/assets/6677a48f-2eef-402d-9ffa-d8dfd00994dd)  
![19](https://github.com/user-attachments/assets/c93fe167-5377-4123-b7aa-c33deccddee7)  
![20](https://github.com/user-attachments/assets/8c3dda0a-8609-4c08-83d6-b9341c99d256)  
![21](https://github.com/user-attachments/assets/61e58cc0-03fb-44ca-9b26-7db9d98a9d16)  
![22](https://github.com/user-attachments/assets/add630d7-fdc8-4cd0-a380-32391c926e74)  
![23](https://github.com/user-attachments/assets/28daf520-a0ad-4b74-be87-ec7f545b45a8)

</details>

<details>
  <summary><strong>Admin Side🛡️</strong></summary>

![24](https://github.com/user-attachments/assets/2a6490dc-fd70-44a5-8697-2016fa494040)  
![25](https://github.com/user-attachments/assets/859d434a-18f8-45bb-8f5b-c70903e6c6b0)  
![26](https://github.com/user-attachments/assets/f506271c-9267-4afd-939e-7e9585f4f677)  
![27](https://github.com/user-attachments/assets/238c23e6-c590-4ad8-a719-a37fceb97dd8)  
![28](https://github.com/user-attachments/assets/bb1810ca-e8b3-4b95-a684-e4cf00b0bcf5)  
![29](https://github.com/user-attachments/assets/7caf01c7-4978-4b77-bbce-ce41feaa368a)

</details>

<details>
  <summary><strong>System Architecture</strong></summary>

![Blank diagram (5)](https://github.com/user-attachments/assets/735436a7-10cf-4117-9a13-a8ff60134fd3)
</details>

<details>
  <summary><strong>Data Flow Diagram</strong></summary>
 
![diagram-export-5-23-2025-11_48_53-PM](https://github.com/user-attachments/assets/ee443770-c7ba-4988-97e5-6e69a32fd1ba)
</details>

<details>
  <summary><strong>ER Diagram</strong></summary>
 
![er diagram](https://github.com/user-attachments/assets/0012fa60-81bc-41dd-a855-8cf9349cbc62)
</details>


## 📝 Notes

1. Ensure that the `.env` variables are correctly configured in the `backend` folder.
2. Make sure MongoDB, Stripe, and Razorpay services are active and properly connected.

## 👩‍💻 Developer

This project was developed by - [Asmita Mishra](https://github.com/AsmitaMishra24) 

## 📬 Contact

For any questions or feedback, feel free to reach out at:
- **GitHub**: [AsmitaMishra](https://github.com/AsmitaMishra24)
- **LinkedIn**: [Asmita Mishra](https://www.linkedin.com/in/asmitamishra1/)
