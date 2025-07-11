import React from "react";
import Header from "../components/Header";


const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto py-8 px-2 sm:px-4 md:px-8 flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">Home</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {/* ضع هنا أي محتوى أو بطاقات */}
          <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center min-h-[120px]">مثال 1</div>
          <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center min-h-[120px]">مثال 2</div>
          <div className="bg-white rounded-lg shadow p-6 flex items-center justify-center min-h-[120px]">مثال 3</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
