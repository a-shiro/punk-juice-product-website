import { useEffect, useState } from "react";
import { fetchData } from "../../../../services/queries";
import styles from "./Articles.module.css";
import Main from "./components/Main/Main";
import Secondary from "./components/Secondary/Secondary";

function Articles({ sectionRef }) {
  const [articles, setArticles] = useState(null);

  // Use custom hook to clean up

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchData("articles");
      setArticles(data);
    };

    getArticles();
  }, []);

  return (
    <section ref={sectionRef} className={styles.sectionContainer}>
      <div className={styles.titleContainer}>
        <h2>News & Events</h2>
      </div>

      {articles ? (
        <div className={styles.articlesContainer}>
          <Main article={articles[0]} />

          <div className={styles.secondaryContainer}>
            <Secondary article={articles[1]} />
            <Secondary article={articles[2]} />
          </div>
        </div>
      ) : (
        <h1>Loading Skeleton</h1>
      )}
    </section>
  );
}

export default Articles;
