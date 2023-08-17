import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Next.module.css";
import useToggleAnimation from "../../../../common/hooks/useToggleAnimation";

function Next({ path }) {
  const linkRef = useRef();
  useToggleAnimation([linkRef]);

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.container}>
        <span>Next article</span>

        <div ref={linkRef} aos="fade-in">
          <h3 className={styles.titleNext}>
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
