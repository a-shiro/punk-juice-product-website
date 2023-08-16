import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import MobileDropdown from "./components/MobileDropdown/MobileDropdown";
import DesktopDropdown from "./components/DesktopDropdown/DesktopDropdown";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
          Punk Juice
        </Link>

        <MobileDropdown />
        <DesktopDropdown />
      </div>
    </nav>
  );
}

export default Nav;
