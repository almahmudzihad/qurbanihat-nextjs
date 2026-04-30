"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [user, setUser] = useState(true); // demo state (auth থাকলে replace করবে)

  const handleLogout = () => {
    setUser(false);
  };

  return (
    <nav className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-600">
          QurbaniHat
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <Link href="/animal" className="hover:text-green-600">All Animals</Link>
          <Link href="/profile" className="hover:text-green-600">My Profile</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* If logged in */}
          {user ? (
            <>
              <Link href="/my-profile">
                <img
                  src="https://i.pravatar.cc/40"
                  className="w-10 h-10 rounded-full border"
                  alt="avatar"
                />
              </Link>

              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="px-4 py-1 border rounded hover:bg-gray-100"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* Mobile Menu (simple) */}
      <div className="md:hidden flex justify-center gap-6 pb-3 text-sm">
        <Link href="/">Home</Link>
        <Link href="/animal">Animals</Link>
        <Link href="/profile" className="hover:text-green-600">My Profile</Link>
      </div>
    </nav>
  );
}