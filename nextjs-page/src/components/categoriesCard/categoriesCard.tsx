import Image from "next/legacy/image";

interface CategoriesCardProps {
    title: string;
    imageUrl: string;
}

const CategoriesCard: React.FC<CategoriesCardProps> = ({ title, imageUrl }) => {
    return (
        <div className="flex flex-col items-center border border-solid border-black rounded-lg p-4 w-52 h-52 justify-center hover:bg-gray-200 transition-colors duration-300">
            <div className="w-36 h-36 relative">
                <Image src={imageUrl} alt={title} layout="fill" className="object-cover w-full h-full rounded-lg" />
            </div>
            <div className="mt-2.5 text-center">
                <h3 className="text-xl font-bold">{title}</h3>
            </div>
        </div>
    );
};

export default CategoriesCard;
