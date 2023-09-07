// CSS
import styles from "./Hero.module.css";
// Static files
import videoMp4 from "../../../../assets/videos/PunkJuice.mp4";

function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <hgroup className={styles.headerTitles}>
        <h1>Punk Juice</h1>
        <h2>
          for those who <strong>rock</strong>
        </h2>
      </hgroup>

      <video className={styles.backgroundVideo} playsInline autoPlay muted loop>
        <source src={videoMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay}></div>
    </section>
  );
}

export default Hero;
