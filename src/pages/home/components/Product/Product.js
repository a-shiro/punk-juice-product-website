import productImage1 from "../../../../assets/images/billboard_mockup.jpg";
import productImage2 from "../../../../assets/images/poster_3.jpg";
import productImage3 from "../../../../assets/images/poster_2.jpg";
import productImage4 from "../../../../assets/images/mockup_posters.jpg";
import styles from "./Product.module.css";
import Poster from "./components/Poster";
import useToggleAnimation from "../../../../common/hooks/useToggleAnimation";
import { useRef } from "react";

function Product({ sectionRef }) {
  const titleRef = useRef();
  useToggleAnimation([titleRef]);

  return (
    <section ref={sectionRef} className={styles.sectionContainer}>
      <div ref={titleRef} className={styles.titleContainer} aos="fade-in">
        <h2>Product</h2>
      </div>

      <div className={styles.productContainer}>
        <div>
          <Poster image={productImage1} />
          <Poster image={productImage2} />
        </div>
        <div>
          <Poster image={productImage3} />
          <Poster image={productImage4} />
        </div>
      </div>
    </section>
  );
}

export default Product;
