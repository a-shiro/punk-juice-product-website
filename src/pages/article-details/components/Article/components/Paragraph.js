import { useRef } from "react";
import styles from "../Article.module.css";
import useToggleAnimation from "../../../../../common/hooks/useToggleAnimation";

function Paragraph({ text, image, paragraphIndex }) {
  const textRef = useRef();
  const imageRef = useRef();
  useToggleAnimation([textRef, paragraphIndex === 2 && imageRef]);

  return (
    <div ref={textRef} aos="fade-in">
      <p>{text}</p>
      {paragraphIndex === 2 && (
        <div ref={imageRef} aos="fade-in">
          <img
            className={styles.articleImage}
            src={image}
            alt="article-image"
          />
        </div>
      )}
    </div>
  );
}

export default Paragraph;
