import CategoriesCard from "@/components/categoriesCard/CategoriesCard";
import Link from "next/link";

const CategoriesPage = () => {
    const categories = [
        { title: "Component 1", imageUrl: "/lobo-ninja-bien.png", href: "/categories/computers" },
        { title: "Component 2", imageUrl: "/lobo-ninja-bien.png", href: "/categories/laptops" },
        { title: "Component 3", imageUrl: "/lobo-ninja-bien.png", href: "/categories/component" },
        { title: "Component 4", imageUrl: "/lobo-ninja-bien.png", href: "/categories/monitors" },
        { title: "Component 5", imageUrl: "/lobo-ninja-bien.png", href: "/categories/peripherals" },
        { title: "Component 6", imageUrl: "/lobo-ninja-bien.png", href: "/categories/gaming-selection" },
        { title: "Component 7", imageUrl: "/lobo-ninja-bien.png", href: "/categories/smartphones-tablets" },
        { title: "Component 8", imageUrl: "/lobo-ninja-bien.png", href: "/categories/tv-audio" },
        { title: "Component 9", imageUrl: "/lobo-ninja-bien.png", href: "/categories/consoles-videogames" },
        { title: "Component 10", imageUrl: "/lobo-ninja-bien.png", href: "/categories/connectivity-printers" },
        { title: "Component 11", imageUrl: "/lobo-ninja-bien.png", href: "/categories/smartwatches-scooters" },
        { title: "Component 12", imageUrl: "/lobo-ninja-bien.png", href: "/categories/home-tech" }
    ];

    return (
        <div className="px-4">
            <h2 className="text-5xl text-center font-bold mb-11">Selection of Components</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-5">
                {categories.map(({ title, imageUrl, href }, index) => (
                    <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
                        <Link href={href}>
                            <div className="cursor-pointer">
                                <CategoriesCard title={title} imageUrl={imageUrl} />
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CategoriesPage;
