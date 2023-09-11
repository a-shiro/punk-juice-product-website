// Hooks
import { useFetchData } from "../../hooks/useFetchData";
// Components
import Article from "./components/Article/Article";
import LoadingSkeleton from "./components/LoadingSkeleton/LoadingSkeleton";
// CSS
import styles from "./Articles.module.css";

function Articles() {
  const articles = useFetchData("articles");
  return (
    <section id="articles" className={styles.section}>
      <h2 className={styles.title}>News & Events</h2>

      {!articles ? (
        <LoadingSkeleton />
      ) : (
        <div className={styles.articles}>
          <Article article={articles[0]} />
          <aside className={styles.aside}>
            <Article article={articles[1]} />
            <Article article={articles[2]} />
          </aside>
        </div>
      )}
    </section>
  );
}

export default Articles;
