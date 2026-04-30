export default function TopBreeds() {
  const breeds = [
    "Deshi Cow",
    "Sahiwal",
    "Friesian",
    "Red Sindhi",
    "Black Bengal Goat",
    "Jamunapari",
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-2xl font-bold mb-6 text-center">
          🐄 Top Breeds
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {breeds.map((breed, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium hover:bg-green-200 transition"
            >
              {breed}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}