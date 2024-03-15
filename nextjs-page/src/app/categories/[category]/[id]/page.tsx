import { Button } from "@/components/ui/button"
import Image from "next/image"

const ProductPage = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="max-w-6xl w-full bg-white rounded-xl shadow-md overflow-hidden">
                <div className="md:flex md:items-center md:justify-center">
                    <div className="md:w-1/2 border-r flex items-center justify-center">
                        <Image
                            src=""
                            alt=""
                            width={1000}
                            height={1000}
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }} />
                    </div>
                    <div className="md:w-1/2 p-8">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Item</div>
                        <h1 className="block mt-4 text-lg leading-relaxed font-medium text-black">Product Name</h1>
                        <div className="mt-4">
                            <div className="text-gray-500 line-through">Original Price</div>
                            <div className="text-gray-900 font-bold">Discounted Price</div>
                        </div>
                        <p className="mt-4 text-gray-600">Product Description</p>
                        <div className="mt-4">
                            <Button>Purchase</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage