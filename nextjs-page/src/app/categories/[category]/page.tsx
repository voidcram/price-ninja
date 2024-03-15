import ProductList from "@/components/ProductList";
import Search from "@/components/Search";
import { Suspense } from "react";
import { getProductsByCategory } from "@/lib/actions";
import PaginationSection from "@/components/PaginationSection";

export default async function ProductsPage({
  params,
  searchParams,
}: {
  params: { category: string };
  searchParams?: {
    search?: string;
    page?: string;
  };
}) {
  const search = searchParams?.search || "";
  const currentPage = Number(searchParams?.page) || 1;

  const response = await getProductsByCategory(params.category, search, currentPage);
  const products = response.data;

  return (
    <div>
      <div className="justify-center text-center">
        <h3 className="text-3xl font-bold mt-10 mb-10">
          Our Collection Of Products
        </h3>
        <div className="flex-1 relative mb-10">
          <Search placeholder="Search Product" />
        </div>
      </div>
      <Suspense>
        <ProductList products={products} />
      </Suspense>
      <PaginationSection totalPages={response.pages}/>
    </div>
  );
};