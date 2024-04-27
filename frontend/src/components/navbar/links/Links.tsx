"use client";

import Link from "next/link";
import styles from "./links.module.css";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const links = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "About Us",
        path: "/about",
    },
    {
        title: "Categories",
        path: "/categories",
    },
];

const Links = () => {
    const [open, setOpen] = useState(false);

    // Temporal
    const session = false;

    return (
        <div>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link href={link.path} key={link.title} className={navigationMenuTriggerStyle()}>
                        {link.title}
                    </Link>
                ))}
                {session ? (
                    <Button>Log Out</Button>
                ) : (
                    <>
                        <Button variant="ghost" className={styles.loginButton}>Sign in</Button>
                        <Button>Sign Up</Button>
                    </>
                )}
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
