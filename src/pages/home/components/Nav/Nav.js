import styles from "./Nav.module.css";

function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <a>Punk Juice</a>

        <button className={styles.hamburger}>X</button>

        <div className={styles.listWrapper}>
          <ul class={styles.navbarList}>
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
