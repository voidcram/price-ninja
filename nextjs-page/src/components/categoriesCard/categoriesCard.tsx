import styles from './categoriesCard.module.css'
import Image from "next/image"

const CategoriesCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.imgContainer}>
                    <Image src="/lobo-ninja-bien.png" alt='' fill className={styles.img} />
                </div>
                <div className={styles.title}>
                    <h3>Title</h3>
                </div>
            </div>
        </div>
    )
}

export default CategoriesCard