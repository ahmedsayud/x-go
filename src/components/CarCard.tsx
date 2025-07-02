interface CarCardProps {
  name: string
  image: string
  price: string
  location: string
  rating: number
}

const CarCard: React.FC<CarCardProps> = ({ name, image, price, location, rating }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col w-full mx-auto h-[368px]">
    <img
      src={image}
      alt={name}
      className="w-full h-40 md:h-48 object-cover rounded-t mb-2 bg-gray-100"
      onError={(e) => {
        (e.target as HTMLImageElement).src = '/d715a1cb2f850c1a49ea75f003edab7156d9fc1c.jpg';
      }}
    />
    <div className=" p-4 flex-1 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-base md:text-lg text-gray-900">{name}</span>
          <span className="text-orange-500 font-semibold text-base md:text-lg">{price}</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm mb-1">
          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          {location}
        </div>
        <div className="flex items-center text-yellow-400 text-sm">
          <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.175 0l-3.385 2.46c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.95-.69l1.286-3.967z" /></svg>
          {rating}
        </div>
      </div>
    </div>
  </div>
)

export default CarCard 