import styles from './home.module.css';
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Your Ultimate Bargain Hunter</h1>
      <h3 className={styles.subtitle}>Find the Best Deals Online and Save Big with Price Ninja</h3>
      <div className={styles.buttonGroup}>
        <Button>
          <Link href="/products">Get Started</Link>
        </Button>
        <Button variant="outline">
          <GitHubLogoIcon className={styles.icon} /> GitHub
        </Button>
      </div>
      <h2 className={styles.descTitle}>About Our Proyect</h2>
      <p className={styles.desc}>
        Welcome to our project dedicated to finding the best
        deals and lowest prices across a wide range of
        products. In a world inundated with choices, navigating
        through various retailers and online platforms to
        find the most cost-effective options can be overwhelming.
        That's where our project comes in - to simplify the
        process and help users make informed purchasing decisions.
      </p>
    </div>
  </div>
}

export default Home