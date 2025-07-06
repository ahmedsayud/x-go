import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarThumb from "../components/CarThumb";
import CarDetailsTabs from "../components/CarDetailsTabs";

import carImg from "../assets/d715a1cb2f850c1a49ea75f003edab7156d9fc1c.jpg";
import CarDetailsCard from "../components/CarDetailsCard";
import Frame225 from "../assets/Car Details Card Icon/Frame 225.png";
import Group from "../assets/Car Details Card Icon/Group.png";
import Vector6 from "../assets/Car Details Card Icon/Vector (6).png";
import Frame290 from "../assets/Car Details Card Icon/Frame 290.png";
import Frame293 from "../assets/Car Details Card Icon/Frame 293.png";
import bxsShoppingBags from "../assets/Car Details Card Icon/bxs_shopping-bags.png";
import ionCarSport from "../assets/Car Details Card Icon/ion_car-sport.png";
import solarFuelBold from "../assets/Car Details Card Icon/solar_fuel-bold.png";

const Car: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDF9F2] pb-10">
      {/* Header */}
      <Header />
      <main className="flex-1 container mx-auto px-5 pt-24">
        <main className="max-w-6xl mx-auto mt-10 flex flex-col lg:flex-row gap-10">
          {/* Left: Car Images */}
          <section className="flex-1 flex  gap-6">
            <img
              src={carImg}
              alt="Car"
              className="rounded-xl w-[75%] h-[350px] object-cover shadow-md"
            />
            <div className="grid grid-cols-2  gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <img
                  key={i}
                  src={carImg}
                  alt="Car thumb"
                  className="w-24 h-16 rounded-lg object-cover border border-gray-200"
                />
              ))}
            </div>
          </section>
          <div className="grid grid-cols-4 gap-4 my-10 w-[75%]">
            <CarThumb image={Vector6} text="62.500" />
            <CarThumb image={solarFuelBold} text="Petrol" />
            <CarThumb image={Frame290} text="Manual" />
            <CarThumb image={Group} text="2 Seates" />
            <CarThumb image={bxsShoppingBags} text="1 Bags" />
            <CarThumb image={ionCarSport} text="Ferrari" />
            <CarThumb image={Frame293} text="Doors" />
            <CarThumb image={Frame225} text="3.5 L" />
          </div>
          {/* Right: Car Info & Booking */}
          <section className=" w-[75%] flex flex-col gap-6">
            <CarDetailsTabs />
            {/* <div className="bg-white rounded-xl shadow-md p-6">
              <h1 className="text-2xl font-bold mb-2">
                Ferrari Enzo - Lorem ipsum dolor sit amet consectetur.
              </h1>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque euismod, nisi eu consectetur consectetur, nisl nisi
                euismod nisi, euismod euismod nisi nisi euismod.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                  Automatic
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                  Petrol
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                  2 Seats
                </span>
                <span className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium">
                  2023
                </span>
              </div>
              <table className="w-full text-sm mb-4">
                <tbody>
                  <tr>
                    <td className="py-1 text-gray-500">Brand</td>
                    <td className="py-1 font-semibold">Ferrari</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray-500">Model</td>
                    <td className="py-1 font-semibold">Enzo</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray-500">Year</td>
                    <td className="py-1 font-semibold">2023</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray-500">Fuel</td>
                    <td className="py-1 font-semibold">Petrol</td>
                  </tr>
                  <tr>
                    <td className="py-1 text-gray-500">Transmission</td>
                    <td className="py-1 font-semibold">Automatic</td>
                  </tr>
                </tbody>
              </table>
              <div className="flex items-center justify-between mt-4">
                <span className="text-2xl font-bold text-orange-500">
                  $160{" "}
                  <span className="text-base text-gray-500 font-normal">
                    /Per Day
                  </span>
                </span>
                <button className="bg-orange-500 text-white px-8 py-2 rounded-full font-bold">
                  Book Now
                </button>
              </div>
            </div> */}
          </section>
        </main>

        {/* You May Also Like These */}
        <section className="max-w-6xl mx-auto mt-10">
          <h2 className="text-xl font-bold mb-6">You May Also Like These</h2>
          <div className="grid lg:grid-cols-3 sm:grid-cols-1 gap-6">
            {Array.from({ length: 4 }).map((_, idx) => (
              <CarDetailsCard
                key={idx}
                image={carImg}
                name="E-Tron GT"
                brand="Ferrari"
                seats={5}
                luggage={3}
                transmission="Automatic"
                fuel="Petrol"
                price={160}
                currency="USD"
                perDayText="/Per Day"
              />
            ))}
          </div>
        </section>
      </main>
      {/* Main Content */}

      <Footer />
    </div>
  );
};

export default Car;
