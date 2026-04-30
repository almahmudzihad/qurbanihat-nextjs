
import BookinForm from "@/Components/BookinForm";


export default async function AnimalDetails({ params }) {
  const res = await fetch("/data.json");
  const animals = await res.json();
  
  const { id } = await params;
  console.log(id);
  const animal = animals.find((a) => a.id == id);
  console.log(animal);

  // 🔐 demo auth (replace with real auth)
  const user = true;

  

  if (!animal) {
    return <p className="text-center mt-10">Animal not found</p>;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">

      {/* Animal Info */}
      <div className="grid md:grid-cols-2 gap-8">

        <img
          src={animal.image}
          alt={animal.name}
          className="w-full h-80 object-cover rounded-lg"
        />

        <div>
          <h1 className="text-3xl font-bold">{animal.name}</h1>

          <p className="text-gray-500 mt-2">{animal.location}</p>

          <p className="mt-4">{animal.description}</p>

          <div className="mt-4 space-y-1">
            <p><strong>Type:</strong> {animal.type}</p>
            <p><strong>Breed:</strong> {animal.breed}</p>
            <p><strong>Weight:</strong> {animal.weight} kg</p>
            <p><strong>Age:</strong> {animal.age} years</p>
          </div>

          <p className="mt-4 text-green-600 font-bold text-xl">
            ৳ {animal.price}
          </p>
        </div>
      </div>

      {/* 📝 Booking Form */}
      <BookinForm />
    </div>
  );
}