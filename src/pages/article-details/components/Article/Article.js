// Components
import { Fragment } from "react";
// CSS
import styles from "./Article.module.css";

function Article({ article }) {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>{article?.textTitle}</h1>

      <div className={styles.textContainer}>
        {article?.textArray.map((text, index) => {
          return (
            <Fragment key={index}>
              <p>{text}</p>
              {index === 2 && <img src={article.textImage} alt="" />}
            </Fragment>
          );
        })}
      </div>
    </section>
  );
}

export default Article;
