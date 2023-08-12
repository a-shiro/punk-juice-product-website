import { useRef } from "react";
import styles from "../Article.module.css";
import useToggleAnimation from "../../../hooks/useToggleAnimation";

function Paragraph({ text, image, paragraphIndex }) {
  const paragraphRef = useRef();
  const elementVisible = useToggleAnimation(paragraphRef);

  return (
    <div ref={paragraphRef}>
      <p
        className={
          elementVisible ? styles.fadeAnimationIn : styles.fadeAnimationOut
        }
      >
        {text}
      </p>
      {paragraphIndex === 2 && (
        <img
          className={`${styles.articleImage} ${
            elementVisible ? styles.fadeAnimationIn : styles.fadeAnimationOut
          }`}
          src={image}
          alt="article-image"
        />
      )}
    </div>
  );
}

export default Paragraph;
