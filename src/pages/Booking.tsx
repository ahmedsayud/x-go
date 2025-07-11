import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BookingSteps from '../components/BookingSteps'

const Booking: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main className="flex-1 container mx-auto px-2 sm:px-4 py-8">
      <BookingSteps step={1} />
      <h1 className="text-2xl font-bold mb-6 text-center">Booking - Step 1</h1>
      {/* Booking step 1 content here */}
      <div className="border-2 border-blue-500 rounded-md p-4 sm:p-8 mt-8 max-w-2xl mx-auto bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">Terms and Condition</h2>
        <h3 className="text-lg font-semibold mb-2">Payments</h3>
        <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
          <li>Lorem ipsum dolor sit amet consectetur. Mattis vestibulum nunc mattis aliquam arcu sed. Diam in nisl maecenas sed lacus sit ligula. Id nulla felis pulvinar sed eu vel proin ultricies elementum. Id odio ultrices sed arcu velit condimentum et purus duis. Morbi arcu sed mauris.</li>
          <li>Lorem ipsum dolor sit amet consectetur. Mattis vestibulum nunc mattis aliquam arcu sed. Diam in nisl maecenas sed lacus sit ligula. Id nulla felis pulvinar sed eu vel proin ultricies elementum. Id odio ultrices sed arcu velit condimentum et purus duis. Morbi arcu sed mauris.</li>
          <li>Lorem ipsum dolor sit amet consectetur. Mattis vestibulum nunc mattis aliquam arcu sed. Diam in nisl maecenas sed lacus sit ligula. Id nulla felis pulvinar sed eu vel proin ultricies elementum. Id odio ultrices sed arcu velit condimentum et purus duis. Morbi arcu sed mauris.</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
        <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur. Mattis vestibulum nunc mattis aliquam arcu sed. Diam in nisl maecenas sed lacus sit ligula. Id nulla felis pulvinar sed eu vel proin ultricies elementum. Id odio ultrices sed arcu velit condimentum et purus duis. Morbi arcu sed mauris</p>
      </div>
    </main>
    <Footer />
  </div>
)

export default Booking 