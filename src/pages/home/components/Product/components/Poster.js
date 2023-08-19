import { useRef } from "react";
import styles from "../Product.module.css";
import useToggleAnimation from "../../../../../common/hooks/useToggleAnimation";

function Poster({ image }) {
  const posterRef = useRef();
  useToggleAnimation([posterRef]);

  return (
    <div ref={posterRef} aos="fade-in-fast">
      <img src={image} className={styles.productImage} alt="product" />
    </div>
  );
}

export default Poster;
