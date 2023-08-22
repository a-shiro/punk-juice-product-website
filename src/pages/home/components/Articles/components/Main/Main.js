import { Link } from "react-router-dom";
import styles from "./Main.module.css";
import useToggleAnimation from "../../../../../../common/hooks/useToggleAnimation";
import { useRef } from "react";

function Main({ article }) {
  const articleRef = useRef();
  useToggleAnimation([articleRef]);
  const articlePath = `/article-details/${article.path}`;

  return (
    <div ref={articleRef} className={styles.mainContainer} aos="fade-in">
      <div>
        <div className={styles.imageContainer}>
          <Link to={articlePath} state={article}>
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
            <Link to={articlePath} state={article}>
              {article.heroTitle}
            </Link>
          </h5>

          <span>22 hours ago</span>
        </div>
      </div>
    </div>
  );
}

export default Main;
