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
  <div className="min-h-screen flex flex-col bg-white pt-10">
    <Header />
    <section
  className="
    w-full
    h-[70vh] min-h-[500px]
    flex items-end bg-cover bg-center justify-center
    rounded-b-2xl shadow-lg overflow-hidden mt-10 mb-8
  "
  style={{ backgroundImage: `url(${carHero})` }}
>
  <BookingBar />
</section>

    <div className="flex flex-col lg:flex-row relative gap-6 px-2 sm:px-4 md:px-8">
      {/* Sidebar: يظهر فوق على الموبايل، جانبي على الديسكتوب */}
      <div className="w-[30%] lg:w-[300px] mb-6 lg:mb-0 lg:sticky lg:top-0 z-10 flex-shrink-0">
        <CarFilterSidebar />
      </div>
      <main className="flex-1 w-full px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
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
