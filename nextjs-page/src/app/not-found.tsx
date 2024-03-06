"use client";

import Link from "next/link"

const NotFound = () => {
    return (
        <div>
            <h2>Recurso no encontrado</h2>
            <p>Lo sentimos, el recurso solicitado no existe.</p>
            <Link href="/">Volver a la página de inicio</Link>
        </div>
    )
}

export default NotFound