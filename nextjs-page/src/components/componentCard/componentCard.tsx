import Image from "next/image"

const ComponentCard = () => {
    return (
        <div className="flex flex-col gap-5">
            <div className="flex">
                <div className="w-52 h-52 relative border border-solid border-black rounded-lg">
                    <Image src="/lobo-ninja-bien.png" alt="" fill className="object-cover" />
                </div>
            </div>
            <div>
                <h1 className="w-52 text-xl mb-2.5">Title</h1>
                <p className="w-52 mb-2.5 font-light text-slate-500"><span>Price1</span> - <span> Price 2</span></p>
            </div>
        </div>
    )
}

export default ComponentCard