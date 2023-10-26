// Hooks
import { useEffect, useState } from "react";
// Components
import Article from "./components/Article/Article";
import LoadingSkeleton from "./components/LoadingSkeleton/LoadingSkeleton";
// CSS
import styles from "./Articles.module.css";
// Data
import { fetchData } from "../../../../services/queries";

function Articles() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData("articles");

      setArticles(data);
    };

    getData();
  }, []);

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
