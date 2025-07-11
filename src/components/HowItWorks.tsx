import React from "react";

import car1 from "../assets/images (4).jfif";
import car2 from "../assets/images (5).jfif";
import car3 from "../assets/images (6).jfif";
import car4 from "../assets/images (7).jfif";
import car5 from "../assets/images (8).jfif";
import car6 from "../assets/images (10).jfif";
import car7 from "../assets/images (11).jfif";
import car8 from "../assets/images (12).jfif";
import car9 from "../assets/images (13).jfif";

const cars = [
  {
    id: 1,
    name: "Ferrari Black",
    description: "سيارة رياضية فاخرة سوداء اللون، أداء عالي وتصميم أنيق.",
    image: car1,
    bookedDays: 7,
    rating: 4.5,
    location: " Egypt",
  },
  {
    id: 2,
    name: "Ferrari White",
    description: "سيارة رياضية فاخرة بيضاء اللون، مثالية للقيادة في المدينة.",
    image: car2,
    bookedDays: 7,
    rating: 4.5,
    location: " Egypt",
  },
  {
    id: 3,
    name: "Icon 1",
    description: "أيقونة مميزة لاستخدامات متعددة في التطبيق.",
    image: car3,
    bookedDays: 7,
    rating: 4.5,
    location: " Egypt",
  },
  {
    id: 4,
    name: "Icon 2",
    description: "أيقونة إضافية لتمثيل ميزة أو خدمة.",
    image: car4,
    bookedDays: 7,
    rating: 4.5,
    location: " Egypt",
  },
  {
    id: 5,
    name: "Date Icon",
    description: "أيقونة توضح إمكانية الحجز في أي وقت.",
    image: car5,
    bookedDays: 7,
    rating: 4.5,
    location: " Egypt",
  },
  {
    id: 6,
    name: "Support Icon",
    description: "أيقونة دعم العملاء وخدمة ما بعد البيع.",
    image: car6,
    bookedDays: 7,
    rating: 4.5,
    location: " Egypt",
  },
  {
    id: 7,
    name: "Support Icon",
    description: "أيقونة دعم العملاء وخدمة ما بعد البيع.",
    image: car7,
    bookedDays: 7,
    rating: 4.5,
    location: " Egypt",
  },
  {
    id: 8,
    name: "Support Icon",
    description: "أيقونة دعم العملاء وخدمة ما بعد البيع.",
    image: car8,
    bookedDays: 7,
    rating: 4.5,
    location: " Egypt",
  },
  {
    id: 9,
    name: "Support Icon",
    description: "أيقونة دعم العملاء وخدمة ما بعد البيع.",
    image: car9,
    bookedDays: 7,
    rating: 4.5,
    location: " Egypt",
  },
];
const steps = [
  {
    number: "01",
    title: "Discover Your Perfect Car",
    description:
      "Lorem ipsum dolor sit amet consectetur. Au ele malesuada pretium sed porta. Augue massa ipsum odio urna vel nisl.",
  },
  {
    number: "02",
    title: "Secure Your Rental Booking",
    description: "",
  },
  {
    number: "03",
    title: "Complete Your Booking Payment",
    description: "",
  },
  {
    number: "04",
    title: "Your Booking is Confirmed",
    description: "",
  },
];

const HowItWorks: React.FC = () => (
  <section className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10 p-4 sm:p-6 md:p-8 mt-8 mb-12">
    <div className="w-full lg:w-1/2 max-w-lg flex-1 mx-auto">
      <h4 className="text-[#E6911E] font-bold text-base mb-2">How It Works</h4>
      <h2 className="font-bold text-2xl md:text-4xl mb-8">
        Step by step to rent a car on our platform
      </h2>
      <ol className="space-y-6">
        {steps.map((step, idx) => (
          <li key={step.number} className="flex items-start">
            <span
              className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 font-medium text-lg md:text-xl rounded-full flex items-center justify-center font-bold mr-5 ${
                idx === 0
                  ? "bg-[#E6911E] text-white"
                  : "text-[#7B7B7B] border border-[#7B7B7B] bg-white"
              }`}
            >
              {step.number}
            </span>
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-1">
                {step.title}
              </h3>
              {step.description && (
                <p className="font-medium text-base md:text-lg max-w-xs">
                  {step.description}
                </p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </div>
    <div className="w-full lg:w-1/2 max-w-xl flex-1 mx-auto flex flex-col gap-8">
      <div className="mb-4 mt-6 w-full">
        <h4 className="font-medium text-lg md:text-2xl mb-4">Car Type</h4>
        <div className="flex gap-3 sm:gap-4 overflow-x-auto whitespace-nowrap hide-scrollbar pb-2">
          {cars.map((car) => (
            <div
              key={car.id}
              className="flex-shrink-0 w-32 sm:w-36 md:w-40 bg-white rounded-lg shadow-md p-2 last:mr-0 mx-1"
            >
              <img
                src={car.image}
                alt={car.name}
                className="rounded-lg mb-2 mx-auto bg-gray-100"
                style={{ width: 96, height: 96, objectFit: 'contain' }}
              />
              <h5 className="font-normal text-xs sm:text-sm md:text-base text-center">
                {car.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-4 overflow-x-auto whitespace-nowrap hide-scrollbar pb-2">
        {cars.map((car) => (
          <div
            key={car.id}
            className="flex-shrink-0 flex flex-col gap-y-3 w-64 md:w-72 h-[340px] md:h-[400px] rounded-lg shadow-md bg-white mb-4 md:mb-0 mx-1"
          >
            <h1 className="font-semibold text-base md:text-xl p-3 md:p-4">
              200+ Car Available
            </h1>
            <img
              src={car.image}
              alt={car.name}
              className="rounded-lg mb-2 mx-auto bg-gray-100"
              style={{ width: 120, height: 80, objectFit: 'contain' }}
            />
            <div className="p-3 md:p-4">
              <p className="font-medium text-sm md:text-lg">{car.name}</p>
              <p className="font-medium text-sm md:text-lg">
                {car.rating}
                <span className="text-[#7b7b7b]">/Day</span>
              </p>
              <div className="flex justify-between items-center mt-2">
                <div className="flex items-center">
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5 mr-1"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <p className="font-normal text-xs md:text-base">
                    {car.location}
                  </p>
                </div>
                <p className="flex items-center gap-1">
                  {car.rating}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 md:w-5 md:h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.18 3.63a1 1 0 00.95.69h3.813c.969 0 1.371 1.24.588 1.81l-3.084 2.24a1 1 0 00-.364 1.118l1.18 3.63c.3.921-.755 1.688-1.54 1.118l-3.084-2.24a1 1 0 00-1.176 0l-3.084 2.24c-.784.57-1.838-.197-1.539-1.118l1.18-3.63a1 1 0 00-.364-1.118L2.32 9.057c-.783-.57-.38-1.81.588-1.81h3.813a1 1 0 00.95-.69l1.18-3.63z" />
                  </svg>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HowItWorks;
