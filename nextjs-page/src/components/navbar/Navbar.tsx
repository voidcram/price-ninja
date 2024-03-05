"use client";

import Link from "next/link"
import styles from "./navbar.module.css"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"

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
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default NavBar