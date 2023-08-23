import IntroductionText from "./components/IntroductionText/IntroductionText";
import About from "./components/About/About";
import styles from "./Team.module.css";

function Team() {
  return (
    <section id="team" className={styles.sectionContainer}>
      <IntroductionText />
      <About />
    </section>
  );
}

export default Team;
