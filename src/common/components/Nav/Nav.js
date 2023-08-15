import { Link } from "react-router-dom";
import styles from "./Nav.module.css";
import MobileDropdown from "./components/MobileDropdown/MobileDropdown";
import Hamburger from "./components/Hamburger/Hamburger";
import { useEffect, useState } from "react";
import DesktopDropdown from "./components/DesktopDropdown/DesktopDropdown";

function Nav() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  console.log("rerender");

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  //  use a context maybe

  return (
    <nav onClick={toggleDropdown} className={styles.nav}>
      <div className={styles.container}>
        <Link to="/" className={styles.brand}>
          Punk Juice
        </Link>

        <Hamburger toggleDropdown={toggleDropdown} />

        <MobileDropdown visible={dropdownVisible} />
        <DesktopDropdown />
      </div>
    </nav>
  );
}

export default Nav;
