import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import MobileDropdown from "./components/MobileDropdown/MobileDropdown";
import DesktopDropdown from "./components/DesktopDropdown/DesktopDropdown";
import scroll from "../../../pages/home/utils/scroll";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <h1 onClick={scroll}>
          <Link to="/#hero" className={styles.brand}>
            Punk Juice
          </Link>
        </h1>

        <MobileDropdown />
        <DesktopDropdown />
      </div>
    </nav>
  );
}

export default Nav;
