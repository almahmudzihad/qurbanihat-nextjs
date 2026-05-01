"use client";

import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { Spinner } from "@heroui/react";

export default function Navbar() {
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;

  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="w-full shadow-md bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link
  href="/"
  className="text-3xl font-extrabold tracking-wide text-green-600 hover:text-green-700 transition"
>
  Qurbani<span className="text-black">Hat</span>
</Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
          <Link href="/" className="hover:text-green-600">Home</Link>
          <Link href="/animal" className="hover:text-green-600">All Animals</Link>
          <Link href="/profile" className="hover:text-green-600">My Profile</Link>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Loading state */}
          {isPending && (
            <Spinner color="current" size="sm" />
          )}

          {/* Logged in */}
          {user ? (
            <>
              <Link href="/my-profile">
                <div className="relative w-10 h-10">
                  <Image
                    src={user.image || "https://i.pravatar.cc/40"}
                    alt="avatar"
                    fill
                    className="rounded-full border object-cover"
                  />
                </div>
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

      {/* Mobile Menu */}
      <div className="md:hidden flex justify-center gap-6 pb-3 text-sm">
        <Link href="/">Home</Link>
        <Link href="/animal">Animals</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
}