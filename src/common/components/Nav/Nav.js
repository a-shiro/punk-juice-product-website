// Components
import { Link } from "react-router-dom";
import MobileMenu from "./components/MobileMenu/MobileMenu";
import DesktopMenu from "./components/DesktopMenu/DesktopMenu";
// CSS
import styles from "./Nav.module.css";
// Utils
import scroll from "../../../pages/home/utils/scroll";

function Nav() {
  return (
    <nav className={styles.navigation}>
      <div onClick={scroll} className={styles.brandName}>
        <Link to="/#hero">Punk Juice</Link>
      </div>

      <MobileMenu />
      <DesktopMenu />
    </nav>
  );
}

export default Nav;
