import Link from "next/link";

export default function ProductList({ products }) {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 p-4 md:p-6">
      {products.map((product) => (
        <Link
          key={product.id}
          href={`/categories/${product.category.slug}/${product.id}`}
        >
          <div className="flex flex-col w-full gap-2 items-center group justify-center">
            <img
              alt="Product image"
              className="aspect-2/1 object-cover rounded-lg overflow-hidden"
              height={150}
              src={product.thumb}
              width={150}
            />
            <div className="flex flex-col gap-1 w-full items-center">
              <h3 className="text-lg md:text-md">{product.name}</h3>
              <div className="pt-2 flex items-center justify-between">
                <h4 className="font-bold text-xl sm:text-xl md:text-lg">
                  {product.current_price} €
                </h4>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </section>
  );
}
