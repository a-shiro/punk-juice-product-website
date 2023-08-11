import styles from "./Article.module.css";
import Paragraph from "./components/Paragraph";

function Article({ article }) {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.container}>
        <div>
          <h2 className={styles.title}>{article?.textTitle}</h2>
        </div>

        <div id="paragraphs">
          {article?.textArray.map((text, index) => {
            return (
              <Paragraph
                text={text}
                image={article.textImage}
                paragraphIndex={index}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Article;
