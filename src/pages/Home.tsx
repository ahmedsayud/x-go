import React from "react";
import Header from "../components/Header";


const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <h1>Home</h1>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
