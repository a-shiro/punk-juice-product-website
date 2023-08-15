import styles from "./MobileDropdown.module.css";
import { Link } from "react-router-dom";

function MobileDropdown({ visible }) {
  return (
    <div className={styles.container}>
      <div
        className={`${styles.background} ${visible && styles.backgroundActive}`}
      ></div>

      <ul className={`${styles.list} ${visible && styles.listActive}`}>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>Our Team</Link>
        </li>
        <li>
          <Link>Product</Link>
        </li>
        <li>
          <Link>News & Events</Link>
        </li>
      </ul>
    </div>
  );
}

export default MobileDropdown;
