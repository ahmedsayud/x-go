import React, { useState } from "react";

const PaymentForm: React.FC = () => {
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [saveInfo, setSaveInfo] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-xl w-full mx-auto">
      <h2 className="text-xl font-bold text-[#E6911E] mb-6">Payment</h2>
      <div className="flex flex-col gap-4 mb-6">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="cash"
            checked={paymentMethod === "cash"}
            onChange={() => setPaymentMethod("cash")}
            className="accent-[#E6911E]"
          />
          <span className="font-semibold">Cash on delivery</span>
          <span className="text-xs text-gray-500">Pay in cash when your order is delivered to your location</span>
        </label>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="radio"
            name="paymentMethod"
            value="visa"
            checked={paymentMethod === "visa"}
            onChange={() => setPaymentMethod("visa")}
            className="accent-[#E6911E]"
          />
          <span className="font-semibold flex items-center gap-2">
            <span className="text-lg">VISA</span>
            <span className="text-xs text-gray-500">Credit Card or Debit Card</span>
          </span>
        </label>
      </div>
      {paymentMethod === "visa" && (
        <div className="flex flex-col gap-4 mb-6">
          <input
            type="text"
            placeholder="Card Number"
            className="border border-[#cdcac5] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-200"
          />
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Exp Date"
              className="border border-[#cdcac5] rounded-lg px-3 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
            <input
              type="text"
              placeholder="CVC"
              className="border border-[#cdcac5] rounded-lg px-3 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-orange-200"
            />
          </div>
        </div>
      )}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Shipping Details</h3>
        <input
          type="text"
          placeholder="Address"
          className="border border-[#cdcac5] rounded-lg px-3 py-2 mb-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-200"
        />
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Country"
            className="border border-[#cdcac5] rounded-lg px-3 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-orange-200"
          />
          <input
            type="text"
            placeholder="Zip Code"
            className="border border-[#cdcac5] rounded-lg px-3 py-2 w-1/2 focus:outline-none focus:ring-2 focus:ring-orange-200"
          />
        </div>
        <label className="flex items-center gap-2 mt-3">
          <input
            type="checkbox"
            checked={saveInfo}
            onChange={() => setSaveInfo(!saveInfo)}
            className="accent-[#E6911E]"
          />
          <span className="text-sm text-gray-600">Securely Save my Information For 1-click Checkout</span>
        </label>
      </div>
      <button className="w-full bg-[#E6911E] hover:bg-orange-500 font-semibold py-2 rounded-lg text-white text-lg transition">
        Pay $963
      </button>
    </div>
  );
};

export default PaymentForm; 