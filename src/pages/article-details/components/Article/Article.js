import { useRef } from "react";
import styles from "./Article.module.css";
import Paragraph from "./components/Paragraph";
import useToggleAnimation from "../../../../common/hooks/useToggleAnimation";

function Article({ article }) {
  const titleRef = useRef();
  useToggleAnimation([titleRef]);

  return (
    <section className={styles.sectionContainer}>
      <div className={styles.container}>
        <div ref={titleRef} aos="fade-in">
          <h2 className={styles.title}>{article?.textTitle}</h2>
        </div>

        <div>
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
