import ProductList from "@/components/ProductList";
import Search from "@/components/Search";
import { Suspense } from "react";

async function getProducts(category) {
  const res = await fetch(
    `${process.env.API_URL}/api/v1/products/categories/${category}`,
    {
      headers: {
        "x-api-key": process.env.API_KEY,
      },
    }
  );
  return res.json();
}

const ProductsPage = async ({ params }: { params: { category: string } }) => {
  const response = await getProducts(params.category);
  const products = response.data;

  return (
    <div>
      <div className="justify-center text-center">
        <h3 className="text-3xl font-bold mt-10 mb-10">
          Our Collection Of Products
        </h3>
        <div className="flex-1 relative mb-10">
          <Search placeholder=""/>
        </div>
      </div>
      <Suspense>
        <ProductList products={products} />
      </Suspense>
    </div>
  );
};

export default ProductsPage;
