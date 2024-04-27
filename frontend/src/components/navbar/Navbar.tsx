"use client";

import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu"
import Links from "./links/Links";
import Link from "next/link";


const NavBar = () => {
    return (
        <div className="h-24 flex items-center border-b border-solid border-b-black justify-between">
            <Link href="/" className="text-3xl font-bold">🐱‍👤 Price Ninja</Link>
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