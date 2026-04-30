import Image from "next/image";
import Link from "next/link";


export default function Hero() {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-green-700 leading-tight">
            Find the Perfect Animal for Your Qurbani
          </h1>

          <p className="mt-4 text-gray-600">
            Browse healthy cows and goats, compare prices, and book your
            Qurbani animal easily from trusted sources.
          </p>

          <Link
            href="/animal"
            className="inline-block mt-6 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Browse Animals
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            width={500}
            height={500}
            src="/Qurbani-hero.jpg"
            alt="Qurbani Animal"
            className="w-full h-[300px] md:h-[400px] object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}