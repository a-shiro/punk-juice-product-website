// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./Info.module.css";
// Utils
import scroll from "../../../../utils/scroll";

function Info() {
  return (
    <div className={styles.infoContainer}>
      <h1 className={styles.title}>
        We’re - daring and unapologetically advanced.
      </h1>

      <h2 className={styles.subtitle}>
        Over five years in the production business
      </h2>

      <div onClick={scroll}>
        <Link to="/#articles">Read News & Events</Link>
        <Link to="/#contact">Work with Us</Link>
      </div>
    </div>
  );
}

export default Info;
