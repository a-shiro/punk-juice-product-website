import IntroductionText from "./components/IntroductionText/IntroductionText";
import About from "./components/About/About";
import styles from "./Team.module.css";

function Team({ sectionRef }) {
  return (
    <section ref={sectionRef} className={styles.sectionContainer}>
      <IntroductionText />
      <About />
    </section>
  );
}

export default Team;
