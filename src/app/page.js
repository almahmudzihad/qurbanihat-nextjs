import AnimalCard from "@/Components/AnimalCard";
import Hero from "@/Components/Hero";
import QurbaniTips from "@/Components/QurbaniTips";
import TopBreeds from "@/Components/TopBreeds";


export default async function Home() {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  const animal = data.slice(0, 4);
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold mb-6">Featured Animals</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {animal.map((animal) => (
            <AnimalCard key={animal.id} animal={animal} />
          ))
        }
        </div>
        
      </div>
      <QurbaniTips />
      <TopBreeds />
      
    </div>
  );
}
