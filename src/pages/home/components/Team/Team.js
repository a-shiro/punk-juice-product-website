import IntroductionText from "./components/IntroductionText";
import About from "./components/About/About";
import styles from "./Team.module.css";

function Team() {
  return (
    <section className={styles.teamContainer}>
      <IntroductionText />
      <About />
    </section>
  );
}

export default Team;
