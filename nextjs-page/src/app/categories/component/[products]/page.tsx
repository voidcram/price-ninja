"use client";

import ComponentCard from "@/components/componentCard/ComponentCard";
import SearchBar from "@/components/searchBar/SearchBar";
import { useState } from "react";

const ProductsPage = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  const products = [
    { id: 1, title: "Title 1", price1: "Price1", price2: "Price2" },
    { id: 2, title: "Title 2", price1: "Price1", price2: "Price2" },
    { id: 3, title: "Title 3", price1: "Price1", price2: "Price2" },
    { id: 4, title: "Title 4", price1: "Price1", price2: "Price2" },
    { id: 5, title: "Title 5", price1: "Price1", price2: "Price2" },
    { id: 6, title: "Title 6", price1: "Price1", price2: "Price2" },
    { id: 7, title: "Title 7", price1: "Price1", price2: "Price2" },
    { id: 8, title: "Title 8", price1: "Price1", price2: "Price2" },
  ];

  return (
    <div>
      <div className="justify-center text-center">
        <h3 className="text-3xl font-bold mt-10 mb-10">Our Collection Of Products</h3>
        <div className="flex-1 relative mb-10">
          <SearchBar />
        </div>
      </div>
      <div className="flex flex-wrap gap-7 justify-center">
        {products.map((product) => (
          <div
            key={product.id}
            className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 shadow-md p-4 transition-transform duration-300 ${hovered === product.id && "transform scale-105"
              }`}
            onMouseEnter={() => setHovered(product.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <ComponentCard title={product.title} price1={product.price1} price2={product.price2} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
