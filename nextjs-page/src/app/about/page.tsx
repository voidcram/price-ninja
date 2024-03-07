import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>Sobre Price Ninja</h2>
        <h1 className={styles.title}>Tu Destino para Ahorrar Tiempo y Dinero</h1>
        <p className={styles.desc}>
          <p>
            <strong className={styles.descTitle}>Explora y Compara:</strong>
            <br />
          </p>
          <p>
            Nuestra plataforma te ofre una extensa base de datos de componentes
            de ordenador. Desde procesadores y tarjetas gráficas hasta placas
            base y unidades de almacenamiento, puedes explorar y comparar las
            especificaciones técnicas, rendimiento y precios, todo en un solo
            lugar.
          </p>
          <p>
            <br />
            <strong className={styles.descTitle}>Alertas de Precios:</strong>
          </p>
          <br />
          <p>
            No te pierdas ninguna oferta. Recibe notificaciones cuando los
            productos que has elegido bajen de precio.
          </p>
          <p>
            En Price Ninja, creemos que cada componente cuenta. Descubre, compara
            y lleva tu configuración al siguiente nivel con notros.
          </p>
        </p>
      </div>
      <div className={styles.imgContainer}></div>
    </div>
  )
}

export default AboutPage