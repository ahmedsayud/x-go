import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import CarList from '../components/CarList'
import carHero from "../assets/d715a1cb2f850c1a49ea75f003edab7156d9fc1c.jpg";
import BookingBar from "../components/BookingBar";
import CarFilterSidebar from "../components/CarFilterSidebar";
import CarDetailsCard from "../components/CarDetailsCard";
import carImg from "../assets/d715a1cb2f850c1a49ea75f003edab7156d9fc1c.jpg";
import { Link } from "react-router-dom";

const CarCollection: React.FC = () => (
  <div className=" flex flex-col bg-white pt-10 ">
    <Header />
    <section
      className="w-full  flex items-end bg-cover bg-center justify-center rounded-b-2xl shadow-lg overflow-hidden mt-10 mb-8"
      style={{ backgroundImage: `url(${carHero})` }}
    >
      <BookingBar />
    </section>
    <div className="flex  sm:flex-col relative ">
      <div className="sticky top-0  z-10 ">
        <CarFilterSidebar />
      </div>
      <main className="flex-1 container mx-auto px-5">
       
        <div className="grid lg:grid-cols-2 sm:grid-cols-1 w-full gap-6 mt-10 ">
          {Array.from({ length: 12 }).map((_, idx) => (
            <Link to="/car" key={idx} style={{ textDecoration: 'none' }}>
              <CarDetailsCard
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
            </Link>
          ))}
        </div>
      </main>
    </div>

    <Footer />
  </div>
);

export default CarCollection;
