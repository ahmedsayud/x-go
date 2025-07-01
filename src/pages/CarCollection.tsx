import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CarList from '../components/CarList'

const CarCollection: React.FC = () => (
  <div className="min-h-screen flex flex-col bg-gray-50">
    <Header />
    <main className="flex-1 container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Explore Our Collection</h1>
      <CarList />
    </main>
    <Footer />
  </div>
)

export default CarCollection 