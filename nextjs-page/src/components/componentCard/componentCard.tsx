import Image from "next/legacy/image";

interface ComponentCardProps {
    title: string;
    price1: string;
    price2: string;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ title, price1, price2 }) => {
    return (
        <div className="flex flex-col items-center gap-5">
            <div className="w-52 h-52 relative border border-solid border-black rounded-lg overflow-hidden">
                <Image src="/lobo-ninja-bien.png" alt={title} layout="fill" objectFit="cover" />
            </div>
            <div className="text-center">
                <h1 className="text-xl mb-2.5">{title}</h1>
                <p className="mb-2.5 font-light text-slate-500">{price1} - {price2}</p>
            </div>
        </div>
    );
};

export default ComponentCard;
