"use client";

import { useEffect, useState } from "react";
import AnimalCard from "@/Components/AnimalCard";
import Lottie from "lottie-react";

export default function AllAnimals() {
  const [animals, setAnimals] = useState([]);
  const [sortedAnimals, setSortedAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortType, setSortType] = useState("");
  const [animationData, setAnimationData] = useState(null);

  // fetch lottie animation (no download)
  useEffect(() => {
    fetch("https://assets2.lottiefiles.com/packages/lf20_usmfx6bp.json")
      .then((res) => res.json())
      .then((data) => setAnimationData(data));
  }, []);

  // fetch animals (FIXED)
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setAnimals(data);
        setSortedAnimals(data);
        setLoading(false);
      });
  }, []);

  // sorting
  const handleSort = (type) => {
    setSortType(type);

    let sorted = [...animals];

    if (type === "low") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (type === "high") {
      sorted.sort((a, b) => b.price - a.price);
    }

    setSortedAnimals(sorted);
  };

  // loader (UPDATED 🔥)
  if (loading || !animationData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <div className="w-40">
          {animationData && <Lottie animationData={animationData} loop />}
        </div>
        <p className="text-gray-500">Loading animals...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* Header + Sort */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold">All Animals</h2>

        <select
          value={sortType}
          onChange={(e) => handleSort(e.target.value)}
          className="border px-3 py-2 rounded-md focus:outline-none"
        >
          <option value="">Sort by Price</option>
          <option value="low">Low → High</option>
          <option value="high">High → Low</option>
        </select>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sortedAnimals.map((animal) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
}