"use client";

import styles from "./navbar.module.css"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import Links from "./links/Links";
import Link from "next/link";

const NavBar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>🐱‍👤PriceNinja</Link>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Links />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}

export default NavBar