import * as React from "react"

const ProductPage = () => {
    return (
        <div className="container mx-auto">
            <h1>Página de visualización de producto</h1>
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2">
                    <img src="https://via.placeholder.com/600x400" alt="Imagen del producto" />
                </div>
                <div className="md:w-1/2 p-4">
                    <h2>Nombre del producto</h2>
                    <p>Descripción del producto</p>
                    <ul>
                        <li>Característica 1</li>
                        <li>Característica 2</li>
                        <li>Característica 3</li>
                    </ul>
                    <button className="bg-blue-500 text-white p-2 rounded">Comprar</button>
                </div>
            </div>
        </div>
    )
}

export default ProductPage