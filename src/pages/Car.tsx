import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CarThumb from "../components/CarThumb";
import CarDetailsTabs from "../components/CarDetailsTabs";
import RentSidebar from "../components/RentSidebar";
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
    <div className="min-h-screen pb-10 flex flex-col">
      {/* Header */}
      <Header />
      <main className="container mx-auto px-2 sm:px-4 md:px-8 pt-24">
        <div className="max-w-6xl mx-auto mt-10 gap-10">
          {/* Left: Car Images */}
          <section className="flex-1 flex flex-col md:flex-row gap-6">
            <img
              src={carImg}
              alt="Car"
              className="rounded-xl w-full md:w-[75%] h-[220px] md:h-[350px] object-cover shadow-md mx-auto"
            />
            <div className="grid grid-cols-4 md:grid-cols-2 gap-2 md:gap-4 mt-4 md:mt-0 w-full md:w-auto">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <img
                  key={i}
                  src={carImg}
                  alt="Car thumb"
                  className="w- h-12 md:w-24 md:h-16 rounded-lg object-cover border border-gray-200 mx-auto"
                />
              ))}
            </div>
          </section>
          <div className="flex flex-col lg:flex-row w-full gap-6 justify-between m-auto">
            {/* Main Content */}
            <div className="w-full lg:w-[75%]">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-6 w-full">
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
              <div className=" flex flex-col gap-6">
                <CarDetailsTabs />
              </div>
            </div>
            {/* Sidebar */}
            <div className=" lg:w-[25%] mt-8 lg:mt-0">
              <RentSidebar />
            </div>
          </div>
        </div>
        {/* You May Also Like These */}
        <section className="max-w-6xl mx-auto mt-10">
          <h2 className="text-xl font-bold mb-6">You May Also Like These</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <Footer />
    </div>
  );
};

export default Car;
