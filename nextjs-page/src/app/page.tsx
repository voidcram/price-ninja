import styles from './home.module.css';
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const Home = () => {
  return <div className={styles.container}>
    <div className={styles.textContainer}>
      <h1 className={styles.title}>Price Ninja</h1>
      <p className={styles.desc}>
      En Price Ninja, nos apasiona la tecnología y queremos 
      ayudarte a encontrar los componentes perfectos para
      potenciar tu experiencia informática. Ya sea que estés 
      construyendo tu propio PC o buscando actualizaciones, 
      aquí encontrarás la información más precisa y las 
      comparaciones más detalladas.
      </p>
      <div className={styles.buttonGroup}>
        <Button>Sabes más</Button>
        <Button variant='outline'>Contacto</Button>
      </div>
      <div className={styles.brands}>
        <Image src='/brands.png' alt='' fill className={styles.brandImg}/>
      </div>
      <div className={styles.imgContainer}>
        <Image src='/lobo-ninja-bien.png' alt='' fill className={styles.loboImg}/>
      </div>
    </div>
  </div>
}

export default Home