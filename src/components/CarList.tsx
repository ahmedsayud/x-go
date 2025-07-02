const cars = [
  { name: 'Ferrari', image: '/d715a1cb2f850c1a49ea75f003edab7156d9fc1c.jpg', price: '$200/day' },
  { name: 'Lamborghini', image: '/d715a1cb2f850c1a49ea75f003edab7156d9fc1c.jpg', price: '$250/day' },
  { name: 'Porsche', image: '/d715a1cb2f850c1a49ea75f003edab7156d9fc1c.jpg', price: '$180/day' },
]

const CarList = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {cars.map((car, idx) => (
      <h1 key={car.name + idx}>{car.name}</h1>
    ))}
  </div>
)

export default CarList 