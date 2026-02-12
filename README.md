# 💬 Real-Time Chat App

A full-stack real-time chat application built using the MERN stack with Socket.io.

## 🚀 Features

- User Signup & Login (JWT Authentication)
- Secure password hashing (bcrypt)
- Real-time messaging with Socket.io
- MongoDB Atlas database
- Deployed on Render

---

## 🛠 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT
- Socket.io

### Frontend
- React (Vite)
- Tailwind CSS

---

## 📦 Installation (Run Locally)

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/base-chatapp.git
cd base-chatapp

2️⃣ Install backend dependencies
npm install

3️⃣ Install frontend dependencies
npm install --prefix frontend

4️⃣ Setup Environment Variables

Create a .env file inside the backend folder:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key


⚠️ Make sure your MongoDB Atlas IP is whitelisted.

5️⃣ Run the backend server
npm run server


or for production mode:

npm start

6️⃣ Run frontend (if separate)
cd frontend
npm run dev


App will run at:

http://localhost:5173


Backend runs at:

http://localhost:5000

📜 Build for Production
npm run build

❓ What should you type to run locally?

Backend:

npm run server

Frontend:

cd frontend
npm run dev

🧠 IMPORTANT

Add this file:

backend/.env.example


Example:

PORT=5000
MONGO_URI=your_mongo_uri_here
JWT_SECRET=your_jwt_secret_here


AUTHOR "BALAJI RAGHAV RS"
