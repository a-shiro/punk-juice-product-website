import { Link } from "react-router-dom";
import styles from "./Secondary.module.css";

function Secondary({ article }) {
  const articlePath = `/article-details/${article.path}`;

  return (
    <div className={styles.articleContainer}>
      <Link to={articlePath}>
        <img
          src={article.thumbnail}
          className={styles.articleImage}
          alt="article-thumbnail"
        />
      </Link>

      <div className={styles.articleTag}>{article.type}</div>

      <div className={styles.infoContainer}>
        <h5 className={styles.titleContainer}>
          <Link to={articlePath}>{article.heroTitle}</Link>
        </h5>

        <span>August 6, 2021</span>
      </div>
    </div>
  );
}

export default Secondary;
