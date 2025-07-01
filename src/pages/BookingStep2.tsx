import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookingSteps from '../components/BookingSteps'

const BookingStep2: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main className="flex-1 container mx-auto px-4 py-8">
      <BookingSteps step={2} />
      <h1 className="text-2xl font-bold mb-6 text-center">Booking - Step 2</h1>
      {/* Booking step 2 content here */}
    </main>
    <Footer />
  </div>
)

export default BookingStep2 