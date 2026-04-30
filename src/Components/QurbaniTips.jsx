export default function QurbaniTips() {
  const tips = [
    "Check animal health before booking",
    "Ensure proper age and weight",
    "Choose animals without defects",
    "Buy from trusted sellers",
    "Compare price before purchase",
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-2xl font-bold mb-6 text-center">
          🕌 Qurbani Tips
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
            >
              <p className="text-gray-700">✅ {tip}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}