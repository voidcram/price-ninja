import styles from "./about.module.css"

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Your Destination to Save Time & Money</h1>
        <h2 className={styles.subtitle}>About Price Ninja</h2>
        <p className={styles.desc}>
          <p>
            <strong className={styles.descTitle}>Explore & Track:</strong>
          </p>
          <br />
          <p>
            Our platform offers an extensive database of computer.
            From processors and graphics cards to motherboards to
            motherboards and storage drives, you can browse and
            track the technical specifications, performance
            and prices, all in one place.
          </p>
          <br />
          <p>
            <strong className={styles.descTitle}>Price Alerts:</strong>
          </p>
          <br />
          <p>
            Don't miss out on any offer. Receive notifications when the products
            you have chosen go down in price.
          </p>
          <br />
          <p>
            At Price Ninja, we believe that every component counts. Discover, compare
            and take your configuration to the next level with us.
          </p>
        </p>
      </div>
      <div className={styles.imgContainer}></div>
    </div>
  )
}

export default AboutPage