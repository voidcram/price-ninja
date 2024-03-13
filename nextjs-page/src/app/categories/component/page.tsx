import CategoriesCard from "@/components/categoriesCard/CategoriesCard"
import styles from "./component.module.css"
import Link from "next/link"

const ComponentsPage = () => {
    return (
        <div>
            <h2 className="text-5xl text-center font-bold mb-11">Selection of Components</h2>
            <div className="flex flex-wrap gap-6 mt-5 justify-center">
                <div className={styles.component}>
                    <Link href="/categories/component/motherboards">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.component}>
                    <Link href="/categories/component/cpu">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.component}>
                    <Link href="/categories/component/hdd">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.component}>
                    <Link href="/categories/component/ssd">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.component}>
                    <Link href="/categories/component/gpu">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.component}>
                    <Link href="/categories/component/ram">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.component}>
                    <Link href="/categories/component/liquid-cooling">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.component}>
                    <Link href="/categories/component/sound-cards">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.component}>
                    <Link href="/categories/component/cases">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.component}>
                    <Link href="/categories/component/additional-fans">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.component}>
                    <Link href="/categories/component/psu">
                        <CategoriesCard />
                    </Link>
                </div>
                <div className={styles.component}>
                    <Link href="/categories/component/cpu-fans">
                        <CategoriesCard />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ComponentsPage