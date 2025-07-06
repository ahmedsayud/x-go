import React from "react";

const BookingBar: React.FC = () => {
  return (
    <div className="bg-white shadow-lg rounded-lg w-[90%] flex justify-between items-center mt-[-70px] mb-8 p-6 ">
      <div className=" rounded-2xl  px-4  flex  md:flex-row gap-4 md:gap-6 w-[75%] max-w-4xl items-center">
        {/* الوجهة */}
        <div className="flex flex-col w-[33%] md:w-auto">
          <label className="font-semibold text-gray-700 mb-1 text-sm">Your Destination</label>
          <input
            type="text"
            placeholder="Add your location"
            className="border rounded-lg w-[100%] px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        {/* تاريخ الاستلام */}
        <div className="flex flex-col w-[33%] md:w-auto">
          <label className="font-semibold text-gray-700 mb-1 text-sm">Pick-up Date</label>
          <input
            type="date"
            className="border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        {/* تاريخ التسليم */}
        <div className="flex flex-col w-[33%] md:w-auto">
          <label className="font-semibold text-gray-700 mb-1 text-sm">Drop-OFF Date</label>
          <input
            type="date"
            className="border rounded-lg w-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
        {/* زر الحجز */}
      
      </div >
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full px-8 py-2 transition w-[25%] md:w-auto mt-2 md:mt-6">
          Book A Car
        </button>
    </div>
  );
};

export default BookingBar; 