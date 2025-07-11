interface CardProps {
  title: string
  children: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ title, children, className = '' }) => {
  return (
    <div className={`bg-white w-full sm:w-[205px] max-w-xs rounded-lg shadow-md p-6 mx-auto ${className}`}>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="text-gray-600">
        {children}
      </div>
    </div>
  )
}

export default Card 