// Hooks
import { useRef } from "react";
import useTriggerAnimation from "../../../../../../common/hooks/useTriggerAnimation";
// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./Info.module.css";
// Utils
import scroll from "../../../../utils/scroll";

function Info() {
  const title = useRef();
  const subtitle = useRef();
  const links = useRef();

  useTriggerAnimation([title, subtitle, links]);

  return (
    <div className={styles.infoContainer}>
      <h1 ref={title} className={styles.title}>
        We’re - daring and unapologetically advanced.
      </h1>

      <h2 ref={subtitle} className={styles.subtitle}>
        Over five years in the production business
      </h2>

      <div ref={links} onClick={scroll}>
        <Link to="/#articles">Read News & Events</Link>
        <Link to="/#contact">Work with Us</Link>
      </div>
    </div>
  );
}

export default Info;
