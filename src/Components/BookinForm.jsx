"use client";

import { toast } from "react-toastify";

function BookinForm() {

    const handelBooking = (e) => {
        e.preventDefault();
        toast.success("Booking Confirmed");
    }
  return (
    <div>
        <div className="mt-10 border p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-4">Book This Animal</h2>

        <form onSubmit={handelBooking} className="grid gap-4">

          <input
            type="text"
            placeholder="Your Name"
            required
            className="border p-2 rounded"
          />

          <input
            type="email"
            placeholder="Email"
            required
            className="border p-2 rounded"
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
            className="border p-2 rounded"
          />

          <textarea
            placeholder="Address"
            required
            className="border p-2 rounded"
          />

          <button
            
            type="submit"
            className="bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  )
}

export default BookinForm