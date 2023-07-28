import heroVideo from "../../../../assets/videos/PunkJuice.mov";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroText}>
        <h1>Punk Juice</h1>

        <p>
          for those who <strong>rock</strong>
        </p>
      </div>

      <div className={styles.videoWrapper}>
        <video autoPlay loop muted>
          <source src={heroVideo} type="video/mp4" />
          Your browser does not support .mov video files.
        </video>
      </div>

      <div className={styles.heroOverlay}></div>
    </section>
  );
}

export default Hero;
