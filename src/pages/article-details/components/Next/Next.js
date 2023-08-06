import { Link } from "react-router-dom";
import styles from "./Next.module.css";

function Next({ path }) {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.container}>
        <span>Next article</span>

        <h3>
          <Link to={`/article-details/${path}`}>
            Job Opportunities - Digital Marketing
          </Link>
        </h3>
      </div>
    </section>
  );
}

export default Next;
