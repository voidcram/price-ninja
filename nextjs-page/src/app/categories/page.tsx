import CategoriesCard from "@/components/categoriesCard/CategoriesCard";
import Link from "next/link";

async function getCategories() {
  const res = await fetch(`${process.env.API_URL}/api/v1/categories`, {
    headers: {
      "x-api-key": process.env.API_KEY,
    },
  });
  return res.json();
}

const CategoriesPage = async () => {
  const categories = await getCategories();

  return (
    <div className="px-4">
      <h2 className="text-5xl text-center font-bold mb-11">
        Selection of Categories
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mt-5">
        {categories.map(({ id, name, thumb, slug }, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6">
            <Link href={{ pathname: `/categories/${slug}`, query: {categoryId: id } }}>
              <div className="cursor-pointer">
                <CategoriesCard title={name} imageUrl={thumb} />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
