import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Secondary.module.css";
import useToggleAnimation from "../../../../../../common/hooks/useToggleAnimation";

function Secondary({ article }) {
  const articleRef = useRef();
  const articlePath = `/article-details/${article.path}`;

  useToggleAnimation([articleRef]);

  return (
    <div animation="fade-in" threshold={1} ref={articleRef}>
      <div className={styles.secondaryArticle}>
        <div className={styles.thumbnailContainer}>
          <Link to={articlePath}>
            <img
              src={article.thumbnail}
              className={styles.thumbnail}
              alt="article-thumbnail"
            />
          </Link>
          <div className={styles.line}></div>
          <div className={styles.tag}>{article.type}</div>
        </div>

        <footer className={styles.articleFooter}>
          <Link to={articlePath}>{article.heroTitle}</Link>

          <span>August 6, 2021</span>
        </footer>
      </div>
    </div>
  );
}

export default Secondary;
