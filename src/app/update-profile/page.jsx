"use client";

import { useState, useEffect } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function UpdateProfilePage() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const user = session?.user;

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  // fix async user load
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setImage(user.image || "");
    }
  }, [user]);

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!user) {
    router.push("/login");
    return null;
  }

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await authClient.updateUser({
        name,
        image,
      });

      toast.success("Profile updated successfully!");
      router.push("/my-profile");
    } catch (error) {
      toast.error("Update failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">

      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow">

        <h2 className="text-2xl font-bold text-center mb-6">
          Update Profile
        </h2>

        {/* 🖼️ Image Preview (TOP) */}
        <div className="flex flex-col items-center mb-6">
          <p className="text-sm text-gray-500 mb-2">Profile Image</p>

          <img
            src={image || "https://i.pravatar.cc/150"}
            alt="preview"
            className="w-24 h-24 rounded-full object-cover border-4 border-green-500 shadow"
          />
        </div>

        <form onSubmit={handleUpdate} className="space-y-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="w-full border p-2 rounded"
              required
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block text-sm font-medium mb-1">
              Image URL
            </label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Paste image link"
              className="w-full border p-2 rounded"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
          >
            {loading ? "Updating..." : "Update Profile"}
          </button>

        </form>

      </div>
    </div>
  );
}