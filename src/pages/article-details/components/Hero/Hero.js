import "./Hero.module.css";
import styles from "./Hero.module.css";

function Hero({ article }) {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroText}>
        <h1>{article?.heroTitle}</h1>
        <p>{article?.heroSubtitle}</p>
      </div>

      <div className={styles.imageContainer}>
        <img src={article?.heroImage} />
      </div>

      <div className={styles.heroOverlay}></div>
    </section>
  );
}

export default Hero;
