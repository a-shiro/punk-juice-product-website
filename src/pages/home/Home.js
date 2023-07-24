import styles from "./Home.module.css";
import heroVideo from "../../videos/PunkJuice.mov";

function Home() {
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

      <div className="overlay"></div>
    </section>
  );
}

export default Home;
