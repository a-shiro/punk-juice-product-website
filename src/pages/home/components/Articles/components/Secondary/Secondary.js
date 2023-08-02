import articleImage from "../../../../../../assets/images/billboard_mockup.jpg";
import styles from "./Secondary.module.css";

function Secondary() {
  return (
    <div className={styles.articleContainer}>
      <a>
        <img
          src={articleImage}
          className={styles.articleImage}
          alt="article-thumbnail"
        />
      </a>

      <div className={styles.articleTag}>Events</div>

      <div className={styles.infoContainer}>
        <h5 className={styles.titleContainer}>
          <a>Job Opportunities: Digital, Marketing</a>
        </h5>

        <span>August 6, 2021</span>
      </div>
    </div>
  );
}

export default Secondary;
