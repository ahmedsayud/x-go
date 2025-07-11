import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookingSteps from '../components/BookingSteps'
import carImg from "../assets/d715a1cb2f850c1a49ea75f003edab7156d9fc1c.jpg";

const BookingStep2: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main className="flex-1 container mx-auto px-2 sm:px-4 py-8 flex flex-col items-center justify-center">
      <BookingSteps step={2} />
      <h1 className="text-2xl font-bold mb-6 text-center">Booking - Step 2</h1>
      <div className="w-full max-w-3xl bg-white rounded-lg shadow p-4 md:p-8 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
        {/* الصورة */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-4 md:mb-0">
          <img src={carImg} alt="Car" className="w-40 h-28 md:w-60 md:h-40 object-cover rounded-lg" />
        </div>
        {/* النص والفورم */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start gap-4">
          <div className="w-full text-center md:text-left">
            <h2 className="text-lg md:text-2xl font-bold mb-2">Ferrari Enzo</h2>
            <p className="text-gray-600 mb-2">lorem ipsum sit amet consectetur</p>
          </div>
          <form className="w-full flex flex-col gap-3">
            <input type="email" placeholder="Email" className="border rounded px-3 py-2" />
            <button className="bg-brand text-white rounded px-4 py-2 font-bold">Continue</button>
          </form>
        </div>
      </div>
    </main>
    <Footer />
  </div>
)

export default BookingStep2 