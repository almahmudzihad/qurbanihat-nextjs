# 🐄 QurbaniHat – Livestock Booking Platform

## 🌐 Live Site

👉 https://qurbanihat-nextjs.vercel.app/



---

## 📖 Project Overview

QurbaniHat is a modern livestock marketplace where users can explore animals for Qurbani such as cows and goats. Users can view details and place a booking after authentication.

This project is built using Next.js (App Router) with a focus on clean UI, responsiveness, and authentication.

---

## 🚀 Features

* 🔐 User Authentication (Email/Password + Google Login)
* 🐄 Browse All Animals
* 📄 Animal Details Page
* 🛒 Booking System (with success animation)
* 👤 My Profile Page
* ✏️ Update Profile (Name & Image)
* 🔍 Sorting by Price
* 📱 Fully Responsive Design
* ⚡ Loading States & Toast Notifications
* ❌ Custom 404 Not Found Page


---

## 🧩 Pages & Routes

### 🔓 Public Routes

* `/` → Home Page
* `/animal` → All Animals
* `/login` → Login Page
* `/register` → Register Page

### 🔒 Private Routes

* `/animal/[id]` → Animal Details Page
* `/my-profile` → User Profile
* `/update-profile` → Update User Info

---

## 🏗️ Tech Stack

* ⚛️ Next.js (App Router)
* 🎨 Tailwind CSS
* 🔐 Better Auth
* 🔔 React Toastify
* 🌐 Vercel (Deployment)

---


## ⚙️ Environment Variables

Create a `.env.local` file:

```
BETTER_AUTH_SECRET=your_secret_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/almahmudzihad/qurbanihat.git

# Go to project folder
cd qurbanihat

# Install dependencies
npm install

# Run development server
npm run dev
```

---

## 💡 Additional Features

* Smooth UI with modern design
* Clean component structure
* Reusable components
* Responsive grid layout


---

## 🧠 Lessons Learned

* Next.js App Router structure
* Authentication with Better Auth
* Client vs Server Components
* Handling state and UI updates
* Building responsive UI with Tailwind
