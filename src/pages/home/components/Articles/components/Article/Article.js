// Components
import { Link } from "react-router-dom";
import LazyImage from "../../../../../../common/components/LazyImage/LazyImage";
// CSS
import styles from "./Article.module.css";

function Article({ article }) {
  const articlePath = `/article-details/${article?.path}`;

  return (
    <article className={styles.article}>
      <div className={styles.thumbnail}>
        <Link to={articlePath}>
          <LazyImage
            src={article.thumbnail}
            srcBlurry={article.thumbnailBlurry}
            alt="thumbnail"
            stylesList={{
              blurryLoading: styles.blurLoad,
              completedLoading: styles.loaded,
              image: styles.poster,
              aspectRatio: "4 / 2.65",
            }}
          />
        </Link>

        <div className={styles.tag}>{article?.type}</div>
      </div>

      <div className={styles.details}>
        <Link to={articlePath}>{article?.heroTitle}</Link>
        <span>22 hours ago</span>
      </div>
    </article>
  );
}

export default Article;
