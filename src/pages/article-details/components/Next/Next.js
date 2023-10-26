// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./Next.module.css";

function Next({ title, path }) {
  return (
    <section className={styles.section}>
      <p>Next article:</p>

      <Link to={`/article-details/${path}`}>{title}</Link>
    </section>
  );
}

export default Next;
