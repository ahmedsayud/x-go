import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import carHero from "../assets/d715a1cb2f850c1a49ea75f003edab7156d9fc1c.jpg";
import carCollection from "../assets/images (9).jfif";
import carCollection1 from "../assets/download.jfif";
import carCollection2 from "../assets/images (5).jfif";
import carCollection3 from "../assets/images (10).jfif";
import carCollection4 from "../assets/images (11).jfif";
import carCollection5 from "../assets/images (12).jfif";
import CarCard from "../components/CarCard";
import WhyChooseCard from "../components/WhyChooseCard";
import icon1 from "../assets/Icon/lets-icons_date-fill.png";
import icon2 from "../assets/Icon/Vector (4).png";
import icon3 from "../assets/Icon/Vector (5).png";
import icon4 from "../assets/Icon/bx_support.png";
import HowItWorks from "../components/HowItWorks";
import appStoreImg from "../assets/Frame 179.png";
import playStoreImg from "../assets/Frame 180.png";
import { Link } from "react-router-dom";
// import AutoCarousel from "../components/AutoCarousel";

const cars = [
  {
    name: "Ferrari",
    image: carCollection,
    price: "$72/Day",
    location: "Cairo, Egypt",
    rating: 4.5,
  },
  {
    name: "لوتس ايفورا 400 ",
    image: carCollection1,
    price: "$72/Day",
    location: "Cairo, Egypt",
    rating: 4.5,
  },
  {
    name: "Ferrari",
    image: carCollection2,
    price: "$72/Day",
    location: "Cairo, Egypt",
    rating: 4.5,
  },
  {
    name: "لوتس اميرا",
    image: carCollection3,
    price: "$72/Day",
    location: "Cairo, Egypt",
    rating: 4.5,
  },
  {
    name: "لوتس اميرا",
    image: carCollection4,
    price: "$72/Day",
    location: "Cairo, Egypt",
    rating: 4.5,
  },
  {
    name: "لوتس اميرا",
    image: carCollection5,
    price: "$72/Day",
    location: "Cairo, Egypt",
    rating: 4.5,
  },
];
const carTypes = ["All Type", "Ferrari", "Porsche", "Lamborghini"];

const Landing: React.FC = () => {
  const [activeType, setActiveType] = useState("All Type");
  // فلترة السيارات حسب النوع
  const filteredCars =
    activeType === "All Type"
      ? cars
      : cars.filter((car) =>
          car.name.toLowerCase().includes(activeType.toLowerCase())
        );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 pt-10 ">
      <Header />
      {/* <AutoCarousel /> */}

      <section
        className="w-full h-[590px] flex items-end bg-cover bg-center justify-center rounded-b-2xl shadow-lg overflow-hidden mb-8 mt-10"
        style={{ backgroundImage: `url(${carHero})` }}
      >
        <h1 className="relative z-20 mb-10 text-3xl md:text-5xl font-bold text-white text-center drop-shadow-lg">
          Own the Thrill – Rent the Drive
        </h1>
      </section>
      <section
        className="relative w-full max-w-none sm:max-w-6xl mx-auto bg-white rounded-2xl pb-10 py-10 mt-10 mb-12 flex flex-col items-center px-4 md:px-8 container"
        style={{ zIndex: 2 }}
      >
        <h2 className="text-xl md:text-2xl font-bold text-[#E6911E] text-center  mt-10 mb-1">
          Collection
        </h2>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6">
          Explore Our Collection Cars
        </h3>

        {/* أزرار الفلترة */}
        <div className="flex flex-wrap gap-6 justify-center mb-8">
          {carTypes.map((type) => (
            <button
              key={type}
              className={`font-semibold rounded-lg px-5 py-2 text-sm
              ${
                activeType === type
                  ? "bg-[#E6911E] text-white shadow "
                  : "border text-gray-700"
              }
            `}
              onClick={() => setActiveType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        {/* شبكة السيارات */}
        <div className="w-full grid sm:w-[80%] sm:grid-cols-1 lg:grid-cols-3 gap-8 container px-16">
          {filteredCars.map((car, i) => (
            <div
              key={i}
              className="w-full max-w-[95vw] md:max-w-[420px] mx-auto"
            >
              <CarCard {...car} />
            </div>
          ))}
        </div>

        {/* زر عرض المزيد */}
        <Link to="/collection">
          <button className="mt-10 bg-[#E6911E] text-white font-bold rounded-full px-8 py-2 transition w-full max-w-xs mx-auto">
            See All Collection
          </button>
        </Link>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="w-full max-w-none sm:max-w-6xl mx-auto pt-10 mb-16 flex flex-col items-center px-4 md:px-8 ">
        <h4 className="text-[#E6911E] text-lg mb-2 mt-2 tracking-wide">
          WHY CHOOSE US
        </h4>
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-10 w-full  max-w-xl">
          Unmatched Quality & Service
          <br /> For Your Needs
        </h2>

        <div className="grid   sm:grid-cols-1 lg:grid-cols-2 gap-6 m-auto  md:gap-8 container px-16 ">
          <div className="w-full max-w-none sm:max-w-[420px] mx-auto">
            <WhyChooseCard
              image={icon1}
              title="Flexible Dates"
              description="Lorem ipsum dolor sit amet consectetur. Nulla dignissim donec vehicula elit senectus id. Et ultricies diam justo amet purus pharetra amet sit viverra."
            />
          </div>
          <div className="w-full max-w-none sm:max-w-[420px] mx-auto">
            <WhyChooseCard
              image={icon2}
              title="Plan Your Trip"
              description="Lorem ipsum dolor sit amet consectetur. Nulla dignissim donec vehicula elit senectus id. Et ultricies diam justo amet purus pharetra amet sit viverra."
            />
          </div>
          <div className="w-full max-w-none sm:max-w-[420px] mx-auto">
            <WhyChooseCard
              image={icon3}
              title="Flexible Dates"
              description="Lorem ipsum dolor sit amet consectetur. Nulla dignissim donec vehicula elit senectus id. Et ultricies diam justo amet purus pharetra amet sit viverra."
            />
          </div>
          <div className="w-full max-w-none sm:max-w-[420px] mx-auto">
            <WhyChooseCard
              image={icon4}
              title="Plan Your Trip"
              description="Lorem ipsum dolor sit amet consectetur. Nulla dignissim donec vehicula elit senectus id. Et ultricies diam justo amet purus pharetra amet sit viverra."
            />
          </div>
        </div>
      </section>

      <HowItWorks />
      {/* Download App Section */}
      <section className="w-full flex flex-col items-center justify-center mt-10 px-2">
        <div className="w-[80%]  bg-gradient-to-t from-[#e69220] via-[#f7c26c] to-[#fff8ff] py-8 md:py-12 text-center rounded-lg">
          <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 text-center ">
            Download Our App
          </h2>
          <p className="mb-6 md:mb-8 text-center max-w-md mx-auto text-sm md:text-base">
            Get the best car rental experience on your mobile. Download our app
            now from the App Store or Google Play!
          </p>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 w-[280px] m-auto justify-items-center	 items-center">
            <a href="#" target="_blank" rel="noopener noreferrer ">
              <img
                src={appStoreImg}
                alt="Download on the App Store"
                className="h-12 md:h-16"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src={playStoreImg}
                alt="Download on Google Play"
                className="h-12 md:h-16"
              />
            </a>
          </div>
        </div>
      </section>
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* <CarList /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
