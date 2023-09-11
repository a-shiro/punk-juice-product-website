// Components
import Showcase from "./components/Showcase/Showcase";
// CSS
import styles from "./Product.module.css";

function Product() {
  return (
    <section id="product" className={styles.section}>
      <h2 className={styles.title}>Product</h2>

      <Showcase />
    </section>
  );
}

export default Product;
