import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Mobile from "./components/Menu/Mobile/Mobile";
import Desktop from "./components/Menu/Desktop/Desktop";
import scroll from "../../../pages/home/utils/scroll";

function Nav() {
  return (
    <nav className={styles.navigation}>
      <h1 onClick={scroll} className={styles.brand}>
        <Link to="/#hero">Punk Juice</Link>
      </h1>

      <Mobile />
      <Desktop />
    </nav>
  );
}

export default Nav;
