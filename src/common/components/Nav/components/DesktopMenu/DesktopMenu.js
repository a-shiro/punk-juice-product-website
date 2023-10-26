// Components
import { Link } from "react-router-dom";
// Utils
import scroll from "../../../../../pages/home/utils/scroll";
// CSS
import styles from "./DesktopMenu.module.css";

function DesktopMenu() {
  return (
    <ul className={styles.menu}>
      <li onClick={scroll}>
        <Link to="/#hero">Home</Link>
      </li>
      <li onClick={scroll}>
        <Link to="/#team">Our Team</Link>
      </li>
      <li onClick={scroll}>
        <Link to="/#product">Product</Link>
      </li>
      <li onClick={scroll}>
        <Link to="/#articles">News & Events</Link>
      </li>
      <li onClick={scroll}>
        <Link to="/#contact">Contact Us</Link>
      </li>
    </ul>
  );
}

export default DesktopMenu;
