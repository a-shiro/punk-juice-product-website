// Hooks
import { useRef } from "react";
// Components
import { Link } from "react-router-dom";
import Hamburger from "./components/Hamburger/Hamburger";
// Utils
import scroll from "../../../../../pages/home/utils/scroll";
// CSS
import styles from "./MobileMenu.module.css";

function MobileMenu() {
  const menuRef = useRef();
  const menuOverlayRef = useRef();

  const toggleDropdown = () => {
    menuRef.current.classList.toggle(styles.menuActive);
    menuOverlayRef.current.classList.toggle(styles.menuOverlayActive);
  };

  return (
    <div className={styles.dropdown}>
      <Hamburger toggleDropdown={toggleDropdown} />

      <ul ref={menuRef} className={styles.menu}>
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

      <div ref={menuOverlayRef} className={styles.menuOverlay}></div>
    </div>
  );
}

export default MobileMenu;

// TODO: Add navigation bar closing when clicked to navigate to a section
