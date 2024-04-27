import { Button } from "@/components/ui/button"
import { getProductyById } from "@/lib/actions"
import Image from "next/image"
import Link from "next/link";

export default async function ProductPage({ params }: { params: { id: string } }) {
    const product = await getProductyById(params.id)

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="max-w-6xl w-full bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex md:items-center md:justify-center">
                    <div className="md:w-1/2 border-r flex items-center justify-center">
                        <Image
                            src={product.img}
                            alt=""
                            width={1000}
                            height={1000}
                            />
                    </div>
                    <div className="md:w-1/2 p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.category.name}</div>
                        <h1 className="block mt-4 text-lg leading-relaxed font-medium text-black">{product.name}</h1>
                        <p className="mt-4 text-sm text-gray-600">{product.seller}</p>
                        <div className="mt-4">
                            <div className="text-gray-900 font-bold">Original price: {product.original_price} €</div>
                            <div className="text-gray-900 font-bold">Current price: {product.current_price} €</div>
                            <div className="text-gray-900 font-bold">Lowest price: {product.lowest_price} €</div>
                        </div>
                        <div className="mt-4">
                            <Button className="bg-orange-600" asChild>
                            <Link href={product.url} target="_blank">
                            Go to the product page
                            </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}