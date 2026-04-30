import Link from "next/link";
import Image from "next/image";

export default function AnimalCard({ animal }) {
  return (
    <div className="bg-white border rounded-xl shadow hover:shadow-lg transition overflow-hidden">

      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          
          src={animal.image}
          alt={animal.name}
          fill
          className="object-cover hover:scale-105 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold">{animal.name}</h2>

        <p className="text-sm text-gray-500">
          {animal.location}
        </p>

        <div className="mt-2 flex justify-between text-sm text-gray-600">
          <span>{animal.type}</span>
          <span>{animal.weight}kg</span>
        </div>

        <p className="mt-3 text-green-600 font-bold text-lg">
          ৳ {animal.price}
        </p>

        <Link
          href={`/animal/${animal.id}`}
          className="block mt-4 text-center bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}