"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function MyProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const user = session?.user;

  // loading state
  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading profile...</p>
      </div>
    );
  }

  // not logged in → redirect
  if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4">

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8">

        {/* Avatar */}
        <div className="flex flex-col items-center text-center">

          <div className="relative w-28 h-28 mb-4">
            <Image
              src={user.image || "https://i.pravatar.cc/150"}
              alt="profile"
              fill
              className="rounded-full object-cover border-4 border-green-500"
            />
          </div>

          {/* Name */}
          <h2 className="text-2xl font-bold text-gray-800">
            {user.name || "No Name"}
          </h2>

          {/* Email */}
          <p className="text-gray-500 mt-1">
            {user.email}
          </p>
        </div>

        {/* Info Section */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Full Name</p>
            <p className="font-semibold">{user.name}</p>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Email</p>
            <p className="font-semibold">{user.email}</p>
          </div>

        </div>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">

          <button
            onClick={() => router.push("/update-profile")}
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Update Profile
          </button>

          <button
            onClick={() => router.push("/")}
            className="border px-5 py-2 rounded-lg hover:bg-gray-100 transition"
          >
            Back to Home
          </button>

        </div>

      </div>
    </div>
  );
}