interface WhyChooseCardProps {
  icon?: React.ReactNode;
  image?: string;
  title: string;
  description: string;
}

const WhyChooseCard: React.FC<WhyChooseCardProps> = ({
  icon,
  image,
  title,
  description,
}) => (
  <div className="bg-gray-50 rounded-xl shadow p-8 flex flex-col items-center text-center w-full">
    <span className=" text-[#E6911E] rounded-full p-4 mb-4 flex items-center justify-center">
      {image ? (
        <img
          src={image}
          alt={title + " icon"}
          className="w-10 h-10 object-contain"
        />
      ) : (
        icon
      )}
    </span>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-500 text-sm">{description}</p>
  </div>
);

export default WhyChooseCard;
