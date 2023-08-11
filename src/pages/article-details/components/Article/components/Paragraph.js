import { useEffect, useRef, useState } from "react";
import styles from "../Article.module.css";

function Paragraph({ text, image, paragraphIndex }) {
  const paragraphRef = useRef();
  const [entryVisible, setEntryVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (entry.boundingClientRect.y >= 0) {
          setEntryVisible(entry.isIntersecting);
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(paragraphRef.current);
  }, []);

  return (
    <div ref={paragraphRef}>
      <p
        className={
          entryVisible ? styles.fadeAnimationIn : styles.fadeAnimationOut
        }
      >
        {text}
      </p>
      {paragraphIndex === 2 && (
        <img
          className={`${styles.articleImage} ${
            entryVisible ? styles.fadeAnimationIn : styles.fadeAnimationOut
          }`}
          src={image}
          alt="article-image"
        />
      )}
    </div>
  );
}

export default Paragraph;
