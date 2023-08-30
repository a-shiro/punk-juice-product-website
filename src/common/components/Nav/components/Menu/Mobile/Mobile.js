import { useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Mobile.module.css";
import Hamburger from "./components/Hamburger/Hamburger";
import scroll from "../../../../../../pages/home/utils/scroll";

function Mobile() {
  const linksList = useRef();
  const background = useRef();

  const toggleDropdown = () => {
    linksList.current.classList.toggle(styles.listActive);
    background.current.classList.toggle(styles.backgroundActive);
  };

  return (
    <div className={styles.dropdown}>
      <Hamburger toggleDropdown={toggleDropdown} />

      <menu ref={linksList} className={styles.list}>
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
      </menu>

      <div ref={background} className={styles.background}></div>
    </div>
  );
}

export default Mobile;
