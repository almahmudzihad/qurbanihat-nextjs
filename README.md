# 🐄 QurbaniHat – Livestock Booking Platform

## 🌐 Live Site

https://qurbanihat-nextjs.vercel.app


---

## 📌 Project Purpose

QurbaniHat is a modern livestock marketplace where users can explore animals such as cows and goats for Qurbani. Users can view detailed information and place a booking after authentication. The goal is to provide a simple, responsive, and user-friendly platform.

---

## ✨ Key Features

* 🔐 User Authentication (Email/Password & Google Login)
* 🐄 Browse All Animals
* 📄 Animal Details Page
* 🛒 Booking System with Success Animation
* 👤 My Profile Page
* ✏️ Update Profile (Name & Image)
* 🔍 Sort Animals by Price
* 🎬 Lottie Animation Loader
* 📱 Fully Responsive Design
* ⚡ Loading States & Toast Notifications
* ❌ Custom 404 Not Found Page

---

## 🧩 Routes

### 🔓 Public Routes

* `/` → Home
* `/animal` → All Animals
* `/login` → Login
* `/register` → Register

### 🔒 Private Routes

* `/animal/[id]` → Animal Details
* `/my-profile` → User Profile
* `/update-profile` → Update Profile

---

## 📦 NPM Packages Used

* `next`
* `react`
* `react-dom`
* `tailwindcss`
* `better-auth`
* `lottie-react`
* `react-toastify`
* `@heroui/react`

---

## 🚀 Tech Stack

* Next.js (App Router)
* Tailwind CSS
* Better Auth
* HeroUI
* Vercel (Deployment)

---

## ⚙️ Environment Variables

Create a `.env.local` file:

```
BETTER_AUTH_SECRET=your_secret_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

## 📁 Setup Instructions

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 🎯 Challenges Implemented

* 👤 My Profile Page
* ✏️ Update Profile Feature
* 🎬 Lottie Animation (Loader)

---

