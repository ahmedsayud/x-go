import React from "react";

interface BookingStepperProps {
  currentStep: 1 | 2 | 3;
}

const steps = [
  { label: "Your Selection" },
  { label: "Your Details" },
  { label: "Confirmation" },
];

const BookingStepper: React.FC<BookingStepperProps> = ({ currentStep }) => {
  return (
    <div className="w-full my-6">
      <h2 className="text-2xl font-bold text-center my-6">
        <span className="text-[#ff6900]">P</span>ayment
      </h2>
      <div className="flex items-center justify-center w-full">
        {steps.map((step, idx) => {
          const stepNumber = idx + 1;
          const isActive = currentStep === stepNumber;
          const isCompleted = currentStep > stepNumber;
          return (
            <React.Fragment key={step.label}>
              <div className="flex items-center">
                <div
                  className={`flex items-center justify-center w-7 h-7 rounded-full  transition-colors duration-200 ${
                    isActive
                      ? "bg-[#ff6900]"
                      : isCompleted
                      ? "bg-orange-200 border-orange-400 bg-[#ff6900]"
                      : "bg-white border-gray-300 text-gray-400"
                  }`}
                >
                  {stepNumber}
                </div>
                <span
                  className={`ml-2 mr-4 font-medium text-sm ${
                    isActive
                      ? "text-orange-500"
                      : isCompleted
                      ? "text-orange-400"
                      : "text-gray-500"
                  }`}
                >
                  {step.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div className="flex-1 h-0.5 bg-gray-300 mx-2 min-w-[40px]" />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default BookingStepper;
