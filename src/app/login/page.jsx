"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await authClient.signIn.email({
        email,
        password,
      });

      toast.success("Login successful!");
      router.push("/");
    } catch (error) {
      toast.error("Invalid email or password");
    }

    setLoading(false);
  };

  const handleGoogle = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
      });
    } catch (err) {
      toast.error("Google login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">

        <h2 className="text-2xl font-bold text-center mb-6">
          Welcome Back
        </h2>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-3">

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

        </form>

        {/* Divider */}
        <div className="my-4 text-center text-gray-400">OR</div>

        {/* Google Login */}
        <button
          onClick={handleGoogle}
          className="w-full border py-2 rounded hover:bg-gray-100 transition"
        >
          Continue with Google
        </button>

        {/* Links */}
        <p className="text-sm text-center mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="text-green-600 font-medium">
            Register
          </Link>
        </p>

      </div>
    </div>
  );
}