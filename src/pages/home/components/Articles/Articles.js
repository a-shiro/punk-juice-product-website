import Main from "./components/Main/Main";
import Secondary from "./components/Secondary/Secondary";
import styles from "./Articles.module.css";

function Articles() {
  return (
    <section className={styles.articlesSection}>
      <div className={styles.titleContainer}>
        <h2>News & Events</h2>
      </div>

      <div className={styles.articlesWrapper}>
        <Main />

        <div className={styles.secondaryWrapper}>
          <Secondary />
          <Secondary />
        </div>
      </div>
    </section>
  );
}

export default Articles;
