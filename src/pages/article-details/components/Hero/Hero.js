import "./Hero.module.css";
import styles from "./Hero.module.css";
import heroImage from "../../../../assets/images/bottles_3.png";

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroText}>
        <h1>Article Title</h1>
        <p>article subtitle</p>
      </div>

      <div className={styles.imageContainer}>
        <img src={heroImage} />
      </div>

      <div className={styles.heroOverlay}></div>
    </section>
  );
}

export default Hero;
