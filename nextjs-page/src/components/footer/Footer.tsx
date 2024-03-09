import styles from "./footer.module.css"


const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.text}>
                &copy; 2024 Price Ninja
            </div>
        </div>
    )
}

export default Footer