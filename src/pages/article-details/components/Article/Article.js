import styles from "./Article.module.css";
import articleImage from "../../../../assets/images/billboard_mockup.jpg";

function Article({ article }) {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.container}>
        <h2 className={styles.title}>{article?.textTitle}</h2>

        <div>
          <p>{article?.textArray[0]}</p>
          <p>{article?.textArray[1]}</p>
        </div>

        <div className={styles.imageContainer}>
          <p>{article?.textArray[2]} </p>
          <img src={article?.textImage} alt="article-image" />
        </div>

        <div>
          <p>{article?.textArray[3]}</p>
          <p>{article?.textArray[4]}</p>
          <p>{article?.textArray[5]}</p>
        </div>
      </div>
    </section>
  );
}

export default Article;
