import styles from "./componentCard.module.css"
import Image from "next/image"

const ComponentCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <div className={styles.imgContainer}>
                    <Image src="/lobo-ninja-bien.png" alt="" fill className={styles.img} />
                </div>
            </div>
            <div className={styles.bottom}>
                <h2 className={styles.title}>Title</h2>
                <p className={styles.price}><span>Price1</span> - <span> Price 2</span></p>
            </div>
        </div>
    )
}

export default ComponentCard