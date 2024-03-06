"use client";

import styles from "./navbar.module.css"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import Links from "./links/Links";

const NavBar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Price Ninja</div>
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