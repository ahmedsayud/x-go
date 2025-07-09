import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BookingStepper from "../components/BookingStepper";
import PaymentForm from "../components/PaymentForm";
import CarBookingSummary from "../components/CarBookingSummary";
import Frame225 from "../assets/Car Details Card Icon/Frame 225.png";
import Group from "../assets/Car Details Card Icon/Group.png";
import Vector6 from "../assets/Car Details Card Icon/Vector (6).png";
import Frame290 from "../assets/Car Details Card Icon/Frame 290.png";
const Payment: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 container mx-auto px-4 pt-24">
        <BookingStepper currentStep={3} />
        <div className="grid  grid-cols-2 gap-5 mt-10 ">
          <div className="w-[80%]">
            <PaymentForm />
          </div>
          <div className="w-[50%]">
            {" "}
            <CarBookingSummary
              transmissionIcon={Frame290}
              seatsIcon={Group}
              priceIcon={Vector6}
              engineIcon={Frame225}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Payment;
