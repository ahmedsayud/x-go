import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SelectedCarInfo: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDF9F2] pb-10">
      <Header />
      <main className="container mx-auto px-5 pt-24">
        <h1 className="text-2xl font-bold mb-8 text-center">معلومات السيارة المختارة</h1>
        {/* هنا سيتم عرض بيانات السيارة المختارة */}
        <div className="bg-white rounded-xl shadow p-8 text-center text-gray-500">
          سيتم عرض تفاصيل السيارة المختارة هنا.
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SelectedCarInfo; 