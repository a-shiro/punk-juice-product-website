import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import Hamburger from "./Hamburger";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
          Punk Juice
        </Link>

        <Hamburger />

        <div className={styles.listWrapper}>
          <ul className={styles.navbarList}>
            <li>
              <a className={`${styles.link} ${styles.active}`} href="#hero">
                Home
              </a>
            </li>

            <li>
              <a className={`${styles.link}`} href="#portfolio">
                Our Team
              </a>
            </li>

            <li>
              <a className={`${styles.link}`} href="#portfolio">
                Product
              </a>
            </li>

            <li>
              <a className={`${styles.link}`} href="#news">
                News & Events
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
