import styles from "./About.module.css";
import poster from "../../../../../../assets/images/poster_1.jpg";
import stockPhoto1 from "../../../../../../assets/images/person2.jpg";
import arrowIcon from "../../../../../../assets/icons/arrow.png";

function About() {
  return (
    <div class={styles.aboutContainer}>
      <div className={styles.posterContainer}>
        <img className={styles.poster} src={poster} alt="poster" />
      </div>

      <div className={styles.textContainer}>
        <h3>We’re - daring and unapologetically advanced.</h3>

        <p>Over five years in the production business</p>

        <div className={styles.linkContainer}>
          <a href="#news">Read News & Events</a>

          <a href="#contact">Work with Us</a>
        </div>
      </div>

      <div className={styles.carousel}>
        <div>
          <img
            src={stockPhoto1}
            className={styles.teamPhoto}
            alt="art-director"
          />

          <div class={styles.teamDetailsContainer}>
            <h3>Kelly B.</h3>
            <p>Art Director</p>
          </div>
        </div>

        <button className={styles.carouselControlPrev}>
          <img src={arrowIcon} />
        </button>
        <button className={styles.carouselControlNext}>
          <img src={arrowIcon} />
        </button>
      </div>
    </div>
  );
}

export default About;
