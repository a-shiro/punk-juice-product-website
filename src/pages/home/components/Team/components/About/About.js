import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";
import poster from "../../../../../../assets/images/poster_1.jpg";
import stockPhoto1 from "../../../../../../assets/images/person2.jpg";
import arrowIcon from "../../../../../../assets/icons/arrow.png";
import useToggleAnimation from "../../../../../../common/hooks/useToggleAnimation";

function About() {
  const titleRef = useRef();
  const subtitleRef = useRef();
  const linksRef = useRef();
  useToggleAnimation([titleRef, subtitleRef, linksRef]);

  return (
    <div className={styles.aboutContainer}>
      <div className={styles.posterContainer}>
        <img className={styles.poster} src={poster} alt="poster" />
      </div>

      <div className={styles.textContainer}>
        <div ref={titleRef} aos="fade-in">
          <h3 className={styles.title}>
            We’re - daring and unapologetically advanced.
          </h3>
        </div>

        <div ref={subtitleRef} aos="fade-in">
          <p className={styles.subtitle}>
            Over five years in the production business
          </p>
        </div>

        <div ref={linksRef} aos="pop-up">
          <div className={styles.linkContainer}>
            <Link to="/#articles">Read News & Events</Link>
            <Link to="/#contact">Work with Us</Link>
          </div>
        </div>
      </div>

      <div className={styles.carousel}>
        <div>
          <img
            src={stockPhoto1}
            className={styles.teamPhoto}
            alt="art-director"
          />

          <div className={styles.teamDetailsContainer}>
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
