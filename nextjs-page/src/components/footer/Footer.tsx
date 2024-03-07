import styles from "./footer.module.css"

const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Price Ninja</div>
            <div className={styles.text}>
                Marcos & Adexe | Price Tacker &copy; Todos los derechos reservados
            </div>
        </div>
    )
}

export default Footer