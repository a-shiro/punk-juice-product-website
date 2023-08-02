import articleImage from "../../../../../../assets/images/bottles_3.png";
import styles from "./Main.module.css";

function Main() {
  return (
    <div className={styles.mainContainer}>
      <a>
        <img
          src={articleImage}
          className={styles.articleImage}
          alt="article-thumbnail"
        />
      </a>

      <div className={styles.articleTag}>News</div>

      <div className={styles.infoContainer}>
        <h5 className={styles.titleContainer}>
          <a>Punk Juice is taking the market by storm</a>
        </h5>

        <span class="text-muted">22 hours ago</span>
      </div>
    </div>
  );
}

export default Main;
