import ComponentCard from "@/components/componentCard/componentCard";
import styles from "./products.module.css";
import SearchBar from "@/components/searchBar/searchBar";

const ComponentsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.search}>
        <SearchBar />
      </div>
      <div className={styles.component}>
        <ComponentCard />
      </div>
      <div className={styles.component}>
        <ComponentCard />
      </div>
      <div className={styles.component}>
        <ComponentCard />
      </div>
      <div className={styles.component}>
        <ComponentCard />
      </div>
    </div>
  )
}

export default ComponentsPage