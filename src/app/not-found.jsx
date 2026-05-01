"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-50 to-white px-4 text-center">

      {/* Big 404 */}
      <h1 className="text-7xl font-extrabold text-green-600">
        404
      </h1>

      {/* Title */}
      <h2 className="text-2xl font-bold mt-4 text-gray-800">
        Page Not Found
      </h2>

      {/* Description */}
      <p className="text-gray-500 mt-2 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        Go Back Home
      </Link>

    </div>
  );
}