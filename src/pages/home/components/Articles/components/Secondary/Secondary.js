import { Link } from "react-router-dom";
import styles from "./Secondary.module.css";
import useToggleAnimation from "../../../../../../common/hooks/useToggleAnimation";
import { useRef } from "react";

function Secondary({ article }) {
  const articleRef = useRef();
  useToggleAnimation([articleRef]);
  const articlePath = `/article-details/${article.path}`;

  return (
    <div ref={articleRef} aos="fade-in">
      <div className={styles.articleContainer}>
        <div className={styles.imageContainer}>
          <Link to={articlePath}>
            <img
              src={article.thumbnail}
              className={styles.articleImage}
              alt="article-thumbnail"
            />
          </Link>
          <div className={styles.line}></div>
          <div className={styles.articleTag}>{article.type}</div>
        </div>

        <div className={styles.infoContainer}>
          <h5 className={styles.titleContainer}>
            <Link to={articlePath}>{article.heroTitle}</Link>
          </h5>

          <span>August 6, 2021</span>
        </div>
      </div>
    </div>
  );
}

export default Secondary;
