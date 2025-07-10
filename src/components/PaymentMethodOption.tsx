import React from "react";

interface PaymentMethodOptionProps {
  icon: string; // مسار الصورة
  label: string;
  description?: string;
  selected: boolean;
  onClick: () => void;
}

const PaymentMethodOption: React.FC<PaymentMethodOptionProps> = ({
  icon,
  label,
  description,
  selected,
  onClick,
}) => {
  return (
    <div
      className={`flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer transition shadow-sm mb-3 bg-white ${selected ? "border-[#E6911E] ring-2 ring-[#E6911E]" : "border-gray-200"}`}
      onClick={onClick}
    >
      <div className="flex items-center gap-4">
        <img src={icon} alt="icon" className="w-10 h-10 object-contain" />
        <div>
          <div className="font-semibold text-lg text-gray-900">{label}</div>
          {description && (
            <div className="text-sm text-gray-500 mt-1">{description}</div>
          )}
        </div>
      </div>
      <span className={`inline-block w-6 h-6 rounded-full border-2 flex items-center justify-center ${selected ? "border-[#E6911E]" : "border-gray-300"}`}>
        {selected && <span className="w-3 h-3 bg-[#E6911E] rounded-full block"></span>}
      </span>
    </div>
  );
};

export default PaymentMethodOption; 