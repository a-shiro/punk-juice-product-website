import styles from "./DesktopDropdown.module.css";

function DesktopDropdown() {
  return (
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
  );
}

export default DesktopDropdown;
