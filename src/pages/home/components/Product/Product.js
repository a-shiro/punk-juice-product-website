import styles from "./Product.module.css";
import Showcase from "./components/Showcase/Showcase";

function Product() {
  return (
    <section id="product" className={styles.section}>
      <h2 className={styles.title}>Product</h2>

      <Showcase />
    </section>
  );
}

export default Product;
