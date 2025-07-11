import React from "react";

const BookingBar: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[95%] max-w-6xl flex flex-col md:flex-row justify-between items-center mt-[-70px] mb-8 p-4 md:p-6 gap-4 md:gap-4 mx-auto">
      <div className="rounded-2xl px-0 md:px-4 flex flex-col md:flex-row gap-4 md:gap-6 w-full md:w-[75%] max-w-4xl items-stretch md:items-center">
        {/* الوجهة */}
        <div className="flex flex-col w-full md:w-[33%]">
          <label className="font-semibold text-gray-700 mb-1 text-sm">Your Destination</label>
          <input
            type="text"
            placeholder="Add your location"
            className="border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E6911E]"
          />
        </div>
        {/* تاريخ الاستلام */}
        <div className="flex flex-col w-full md:w-[33%]">
          <label className="font-semibold text-gray-700 mb-1 text-sm">Pick-up Date</label>
          <input
            type="date"
            className="border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E6911E]"
          />
        </div>
        {/* تاريخ التسليم */}
        <div className="flex flex-col w-full md:w-[33%]">
          <label className="font-semibold text-gray-700 mb-1 text-sm">Drop-OFF Date</label>
          <input
            type="date"
            className="border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#E6911E]"
          />
        </div>
      </div>
      {/* زر الحجز */}
      <button className="bg-[#E6911E] text-white font-bold rounded-full px-8 py-2 transition w-full md:w-auto mt-2 md:mt-6 md:mt-0">
        Book A Car
      </button>
    </div>
  );
};

export default BookingBar; 