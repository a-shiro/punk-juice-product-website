import { Link } from "react-router-dom";
import styles from "./Main.module.css";

function Main({ article }) {
  const articlePath = `/article-details/${article.path}`;

  return (
    <div className={styles.mainContainer}>
      <Link to={articlePath} state={article}>
        <img
          src={article.thumbnail}
          className={styles.articleImage}
          alt="article-thumbnail"
        />
      </Link>

      <div className={styles.articleTag}>{article.type}</div>

      <div className={styles.infoContainer}>
        <h5 className={styles.titleContainer}>
          <Link to={articlePath} state={article}>
            {article.heroTitle}
          </Link>
        </h5>

        <span>22 hours ago</span>
      </div>
    </div>
  );
}

export default Main;
