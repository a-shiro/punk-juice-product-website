import Heading from "./components/Heading/Heading";
import About from "./components/About/About";
import styles from "./Team.module.css";

function Team() {
  return (
    <section id="team" className={styles.section}>
      <Heading />
      <About />
    </section>
  );
}

export default Team;
