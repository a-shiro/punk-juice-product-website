import { Link } from "react-router-dom";
import styles from "./Desktop.module.css";
import scroll from "../../../../../../pages/home/utils/scroll";

function Desktop() {
  return (
    <ul className={styles.list}>
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

export default Desktop;
