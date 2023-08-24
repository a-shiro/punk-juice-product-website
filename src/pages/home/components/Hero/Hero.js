import styles from "./Hero.module.css";
import videoMp4 from "../../../../assets/videos/PunkJuice.mp4";
import videoWebm from "../../../../assets/videos/PunkJuice.webm";

function Hero() {
  return (
    <section id="hero" className={styles.section}>
      <header className={styles.header}>
        <h1>Punk Juice</h1>
        <p>
          for those who <strong>rock</strong>
        </p>
      </header>

      <video className={styles.backgroundVideo} playsInline autoPlay muted loop>
        <source src={videoWebm} type="video/webm" />
        <source src={videoMp4} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className={styles.overlay}></div>
    </section>
  );
}

export default Hero;
