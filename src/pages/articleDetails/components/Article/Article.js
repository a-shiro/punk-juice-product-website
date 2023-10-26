// Hooks
import { useRef } from "react";
import useTriggerAnimation from "../../../../common/hooks/useTriggerAnimation";
// CSS
import styles from "./Article.module.css";
import Paragraph from "./components/Paragraph";

function Article({ article }) {
  const title = useRef();
  useTriggerAnimation([title]);

  return (
    <section className={styles.section}>
      <h1 ref={title} className={styles.title}>
        {article?.textTitle}
      </h1>

      <div className={styles.textContainer}>
        {article?.textArray.map((text, index) => {
          return (
            <Paragraph
              text={text}
              image={article.textImage}
              index={index}
              key={index}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Article;
