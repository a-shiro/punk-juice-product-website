// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./Footer.module.css";
// Static files
import locationIcon from "../../../assets/icons/location.png";
import youtubeIcon from "../../../assets/icons/youtube.png";
import facebookIcon from "../../../assets/icons/facebook.png";
import twitterIcon from "../../../assets/icons/twitter.png";
import whatsappIcon from "../../../assets/icons/whatsapp.png";
import instagramIcon from "../../../assets/icons/instagram.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <address>
        <img alt="location-pin" className={styles.icon} src={locationIcon} />
        <span className={styles.address}>State of California, USA</span>
      </address>

      <span className={styles.email}>punkjuice@mail.com</span>

      <div className={styles.contributorsContainer}>
        <span className={styles.contributors}>
          Digital Art by:{" "}
          <Link to="https://linktr.ee/palahanski">Luchezar Palahanski</Link>
        </span>
        <span className={styles.coder}>
          Code by: <Link to="https://github.com/a-shiro">Alek Mitov</Link>
        </span>
      </div>

      <ul className={styles.socials}>
        <li>
          <img alt="instagram" src={instagramIcon} className={styles.icon} />
        </li>
        <li>
          <img alt="facebook" src={facebookIcon} className={styles.icon} />
        </li>
        <li>
          <img alt="twitter" src={twitterIcon} className={styles.icon} />
        </li>
        <li>
          <img alt="whatsapp" src={whatsappIcon} className={styles.icon} />
        </li>
        <li>
          <img alt="youtube" src={youtubeIcon} className={styles.icon} />
        </li>
      </ul>

      <p className={styles.copyright}>Copyright © Punk Juice 2023 </p>
    </footer>
  );
}

export default Footer;
