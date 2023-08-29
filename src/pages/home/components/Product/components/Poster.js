import { useRef } from "react";
import styles from "../Product.module.css";
import useToggleAnimation from "../../../../../common/hooks/useToggleAnimation";

function Poster({ image }) {
  const posterRef = useRef();
  useToggleAnimation([posterRef]);

  return (
    <div animation="fade-in" threshold={0.3} ref={posterRef}>
      <img src={image} className={styles.poster} alt="product" />
    </div>
  );
}

export default Poster;
