import productImage1 from "../../../../assets/images/billboard_mockup.jpg";
import productImage2 from "../../../../assets/images/poster_3.jpg";
import productImage3 from "../../../../assets/images/poster_2.jpg";
import productImage4 from "../../../../assets/images/mockup_posters.jpg";
import styles from "./Product.module.css";

function Product() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.titleContainer}>
        <h2>Product</h2>
      </div>

      <div className={styles.productContainer}>
        <div>
          <div>
            <img
              src={productImage1}
              className={styles.productImage}
              alt="product"
            />
          </div>

          <div>
            <img
              src={productImage2}
              className={styles.productImage}
              alt="product"
            />
          </div>
        </div>

        <div>
          <div>
            <img
              src={productImage3}
              className={styles.productImage}
              alt="product"
            />
          </div>

          <div>
            <img
              src={productImage4}
              className={styles.productImage}
              alt="product"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
