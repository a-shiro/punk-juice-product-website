import { useRef } from "react";
import styles from "./Product.module.css";
import Poster from "./components/Poster";
import useToggleAnimation from "../../../../common/hooks/useToggleAnimation";
import poster_1 from "../../../../assets/images/billboard_mockup.jpg";
import poster_2 from "../../../../assets/images/poster_3.jpg";
import poster_3 from "../../../../assets/images/poster_2.jpg";
import poster_4 from "../../../../assets/images/mockup_posters.jpg";

function Product() {
  const titleRef = useRef();
  useToggleAnimation([titleRef]);

  return (
    <section id="product" className={styles.section}>
      <div
        observerbox="observerbox"
        animation="fade-in"
        threshold={1}
        ref={titleRef}
      >
        <h2 className={styles.title}>Product</h2>
      </div>

      <div className={styles.posterContainer}>
        <div>
          <Poster image={poster_1} />
          <Poster image={poster_2} />
        </div>
        <div>
          <Poster image={poster_3} />
          <Poster image={poster_4} />
        </div>
      </div>
    </section>
  );
}

export default Product;
