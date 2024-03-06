"use client";

import Link from "next/link";
import styles from "./links.module.css";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const links = [
    {
        title: "Inicio",
        path: "/",
    },
    {
        title: "Sobre nosotros",
        path: "/about",
    },
    {
        title: "Contacto",
        path: "/contact",
    },
    {
        title: "Componentes",
        path: "/products",
    },
];

const Links = () => {
    const [open, setOpen] = useState(false);

    // Pruebas
    const session = true;
    const isAdmin = true;

    return (
        <div>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link href={link.path} key={link.title} className={navigationMenuTriggerStyle()}>
                        {link.title}
                    </Link>
                ))}
                {session ? (
                    isAdmin && (
                        <Link href="/admin" className={navigationMenuTriggerStyle()}>
                            Admin
                        </Link>
                    )
                ) : (
                    <Link href="/login" className={navigationMenuTriggerStyle()}>
                        Iniciar sesión
                    </Link>
                )}
                {session && <Button>Cerrar sesión</Button>}
            </div>
            <Button className={styles.menuButton} onClick={() => setOpen((prev) => !prev)}>Menú</Button>
            {open && (
                <div className={styles.mobileLinks}>
                    {links.map((link) => (
                        <Link href={link.path} key={link.title} className={navigationMenuTriggerStyle()}>
                            {link.title}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Links;
