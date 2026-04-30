import AnimalCard from '@/Components/AnimalCard';
import React from 'react'

const AllAnimals = async () => {
    const res = await fetch("/data.json");
  const animal = await res.json();
  
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
            <h2 className="text-2xl font-bold mb-6">Featured Animals</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {animal.map((animal) => (
                <AnimalCard key={animal.id} animal={animal} />
              ))
            }
            </div>
            
          </div>
  )
}

export default AllAnimals