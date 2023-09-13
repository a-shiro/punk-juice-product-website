// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./Next.module.css";

function Next({ path }) {
  return (
    <section className={styles.section}>
      <p>Next article:</p>

      <Link to={`/article-details/${path}`}>
        Job Opportunities - Digital Marketing
      </Link>
    </section>
  );
}

export default Next;
