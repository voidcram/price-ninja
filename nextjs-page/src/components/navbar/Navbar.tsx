"use client";

import Link from "next/link"
import styles from "./navbar.module.css"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"

// Temporal
const session = true;
const isAdmin = false;

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Price Ninja</div>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" className={navigationMenuTriggerStyle()}>
                            Inicio
                        </Link>
                        <Link href="/about" className={navigationMenuTriggerStyle()}>
                            Sobre nosotros
                        </Link>
                        <Link href="/contact" className={navigationMenuTriggerStyle()}>
                            Contáctanos
                        </Link>
                        <Link href="/products" className={navigationMenuTriggerStyle()}>
                            Componentes
                        </Link>
                        <>
                            {session ? (
                                isAdmin && <Link href="/admin" className={navigationMenuTriggerStyle()}>Admin</Link>
                            ) : (
                                <Link href="/login" className={navigationMenuTriggerStyle()}>Iniciar sesión</Link>
                            )}
                            {session && <Button>Cerrar sesión</Button>}
                        </>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default NavBar