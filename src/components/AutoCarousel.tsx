import React, { useEffect, useRef, useState } from "react";

const cars = [
  { id: 1, name: "Ferrari", image: "https://via.placeholder.com/200x120?text=Ferrari" },
  { id: 2, name: "BMW", image: "https://via.placeholder.com/200x120?text=BMW" },
  { id: 3, name: "Audi", image: "https://via.placeholder.com/200x120?text=Audi" },
  { id: 4, name: "Mercedes", image: "https://via.placeholder.com/200x120?text=Mercedes" },
  { id: 5, name: "Lamborghini", image: "https://via.placeholder.com/200x120?text=Lambo" },
  { id: 6, name: "Porsche", image: "https://via.placeholder.com/200x120?text=Porsche" },
  { id: 7, name: "Toyota", image: "https://via.placeholder.com/200x120?text=Toyota" },
];

const VISIBLE_COUNT = 3; // عدد الصور اللي تظهر في نفس الوقت

const AutoCarousel: React.FC = () => {
  const [start, setStart] = useState(0);
  const timeoutRef = useRef<any>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setStart((prev) => (prev + 1) % cars.length);
    }, 2000);

    return () => clearTimeout(timeoutRef.current);
  }, [start]);

  // حساب الصور المعروضة
  const visibleCars = [];
  for (let i = 0; i < VISIBLE_COUNT; i++) {
    visibleCars.push(cars[(start + i) % cars.length]);
  }

  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex gap-4">
        {visibleCars.map((car) => (
          <div
            key={car.id}
            className="w-56 bg-white rounded-lg shadow-md p-3 transition-all duration-500"
          >
            <img
              src={car.image}
              alt={car.name}
              className="object-cover rounded-lg mb-2 w-full h-32"
            />
            <h5 className="font-normal text-base text-center">{car.name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel; 