import { Link } from "react-router-dom";
import styles from "./DesktopDropdown.module.css";
import scroll from "../../../../../pages/home/utils/scroll";

function DesktopDropdown() {
  return (
    <div className={styles.listWrapper}>
      <ul className={styles.navbarList}>
        <li onClick={scroll}>
          <Link to="/#hero" className={styles.link}>
            Home
          </Link>
        </li>
        <li onClick={scroll}>
          <Link to="/#team" className={styles.link}>
            Our Team
          </Link>
        </li>
        <li onClick={scroll}>
          <Link to="/#product" className={styles.link}>
            Product
          </Link>
        </li>
        <li onClick={scroll}>
          <Link to="/#articles" className={styles.link}>
            News & Events
          </Link>
        </li>
        <li onClick={scroll}>
          <Link to="/#contact" className={styles.link}>
            Contact Us
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default DesktopDropdown;
