import React, { useEffect, useRef, useState } from "react";
import carCollection from "../assets/images (9).jfif";
import carCollection1 from "../assets/download.jfif";
import carCollection2 from "../assets/images (5).jfif";
import carCollection3 from "../assets/images (10).jfif";
import carCollection4 from "../assets/images (11).jfif";
import carCollection5 from "../assets/images (12).jfif";
const cars = [
  { id: 1, name: "Ferrari", image: carCollection },
  { id: 2, name: "BMW", image: carCollection1 },
  { id: 3, name: "Audi", image: carCollection2 },
  { id: 4, name: "Mercedes", image: carCollection3 },
  { id: 5, name: "Lamborghini", image: carCollection4 },
  { id: 6, name: "Porsche", image: carCollection5 },
  // { id: 7, name: "Toyota", image: "https://via.placeholder.com/200x120?text=Toyota" },
];

const VISIBLE_COUNT = 1; // عدد الصور اللي تظهر في نفس الوقت

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
    <div className="w-full flex justify-center items-center ">
      <div className="flex gap-4 w-full h-70vh">
        {visibleCars.map((car) => (
          <div
            key={car.id}
            className="h-[94vh] bg-white rounded-lg w-full shadow-md relative overflow-hidden transition-all duration-500"
          >
            <img
              src={car.image}
              alt={car.name}
              className="w-full h-[100vh] object-cover rounded-b-2xl"
            />
            {/* <h1 className="absolute  bottom-10 left-1/2 transform -translate-x-1/2 text-3xl md:text-5xl font-bold text-white drop-shadow-lg z-20 text-center">
              {car.name}
            </h1> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AutoCarousel;
