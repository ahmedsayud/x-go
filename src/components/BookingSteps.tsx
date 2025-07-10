const BookingSteps: React.FC<{ step: number }> = ({ step }) => {
  const steps = ['Details', 'Payment', 'Confirmation']
  return (
    <div className="flex justify-center space-x-4 mb-6">
      {steps.map((label, idx) => (
        <div key={label} className={`px-4 py-2 rounded-full border-2 ${step === idx + 1 ? 'bg-[#E6911E] text-white border-[#E6911E]' : 'bg-white text-[#E6911E] border-gray-300'}`}>{label}</div>
      ))}
    </div>
  )
}

export default BookingSteps 