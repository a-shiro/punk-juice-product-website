import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";
import useToggleAnimation from "../../../../../../common/hooks/useToggleAnimation";

function Main({ article }) {
  const articleRef = useRef();
  const articlePath = `/article-details/${article.path}`;

  useToggleAnimation([articleRef]);

  return (
    <article
      animation="fade-in"
      threshold={0.5}
      ref={articleRef}
      className={styles.mainArticle}
    >
      <div>
        <div className={styles.thumbnailContainer}>
          <Link to={articlePath} state={article}>
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
          <Link to={articlePath} state={article}>
            {article.heroTitle}
          </Link>

          <span>22 hours ago</span>
        </footer>
      </div>
    </article>
  );
}

export default Main;
