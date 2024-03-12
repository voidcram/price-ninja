import CategoriesCard from "@/components/categoriesCard/categoriesCard"
import styles from "./categories.module.css"
import Link from "next/link"

const CategoriesPage = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Selection of Categories</h2>
            <div className={styles.categoryContainer}>
                <div className={styles.category}>
                    <Link href="/categories/computers">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/categories/laptops">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/categories/component">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/categories/monitors">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/categories/peripherals">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/categories/gaming-selection">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/categories/smartphones-tablets">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/categories/tv-audio">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/categories/consoles-videogames">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/categories/connectivity-printers">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/categories/smartwatches-scooters">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.category}>
                    <Link href="/categories/tech-home">
                        <CategoriesCard />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CategoriesPage