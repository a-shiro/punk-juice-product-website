import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Next.module.css";
import useToggleAnimation from "../../hooks/useToggleAnimation";

function Next({ path }) {
  const linkRef = useRef();
  const elementVisible = useToggleAnimation(linkRef);

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.container}>
        <span>Next article</span>

        <div ref={linkRef}>
          <h3
            className={`${styles.titleNext} ${
              elementVisible ? styles.fadeAnimationIn : styles.fadeAnimationOut
            }`}
          >
            <Link to={`/article-details/${path}`}>
              Job Opportunities - Digital Marketing
            </Link>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Next;
