import ComponentCard from "@/components/componentCard/ComponentCard";
import styles from "./products.module.css";
import SearchBar from "@/components/searchBar/SearchBar";

const ProductsPage = () => {
  return (
    <div>
      <div className="justify-center text-center">
        <h3 className="text-3xl font-bold mt-10 mb-10">Our Collection Of Products</h3>
        <div className="flex-1 relative mb-10">
          <SearchBar />
        </div>
      </div>
      <div className="flex flex-wrap gap-7 justify-center">
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
    </div>
  )
}

export default ProductsPage