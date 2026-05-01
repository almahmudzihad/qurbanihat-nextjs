"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";

export default function RegisterPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const image = form.image.value;
    const password = form.password.value;

    try {
      await authClient.signUp.email({
        name,
        email,
        image,
        password,
      });

      toast.success("Registration successful!");
      router.push("/login");
    } catch (error) {
      toast.error(error?.message || "Registration failed");
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
          Create Account
        </h2>

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-3">

          <input
            name="name"
            type="text"
            placeholder="Full Name"
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded"
            required
          />

          <input
            name="image"
            type="text"
            placeholder="Photo URL"
            className="w-full border p-2 rounded"
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
            {loading ? "Creating..." : "Register"}
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

        {/* Link */}
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-green-600 font-medium">
            Login
          </Link>
        </p>

      </div>
    </div>
  );
}