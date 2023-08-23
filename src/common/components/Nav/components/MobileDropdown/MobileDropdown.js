import { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import styles from "./MobileDropdown.module.css";
import Hamburger from "./components/Hamburger/Hamburger";
import scroll from "../../../../../pages/home/utils/scroll";

function MobileDropdown() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <Fragment>
      <Hamburger
        dropdownVisible={dropdownVisible}
        setDropdownVisible={setDropdownVisible}
      />

      <div className={styles.container}>
        <div
          className={`${styles.background} ${
            dropdownVisible && styles.backgroundActive
          }`}
        ></div>

        <ul
          className={`${styles.list} ${dropdownVisible && styles.listActive}`}
        >
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
      </div>
    </Fragment>
  );
}

export default MobileDropdown;
