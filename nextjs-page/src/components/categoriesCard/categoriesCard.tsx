import Image from "next/image"

const CategoriesCard = () => {
    return (
        <div className="flex flex-row gap-5 border border-solid border-black rounded-lg p-2 w-52 h-52 justify-center">
            <div>
                <div className="w-36 h-36 relative">
                    <Image src="/lobo-ninja-bien.png" alt='' fill className="object-cover" />
                </div>
                <div className="mt-2.5 text-center text-xl font-bold">
                    <h3>Title</h3>
                </div>
            </div>
        </div>
    )
}

export default CategoriesCard