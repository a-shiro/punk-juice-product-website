import styles from "./Footer.module.css";
import locationIcon from "../../../assets/icons/location.png";
import youtubeIcon from "../../../assets/icons/youtube.png";
import facebookIcon from "../../../assets/icons/facebook.png";
import twitterIcon from "../../../assets/icons/twitter.png";
import whatsappIcon from "../../../assets/icons/whatsapp.png";
import instagramIcon from "../../../assets/icons/instagram.png";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div>
          <h5 className={styles.title}>
            <img className={styles.titleIcon} src={locationIcon} />
            State of California, USA
          </h5>

          <a className={styles.mail}>punkjuice@mail.com</a>
        </div>

        <div>
          <ul className={styles.socialsList}>
            <li>
              <img src={instagramIcon} className={styles.socialIcon} />
            </li>

            <li>
              <img src={facebookIcon} className={styles.socialIcon} />
            </li>

            <li>
              <img src={twitterIcon} className={styles.socialIcon} />
            </li>

            <li>
              <img src={whatsappIcon} className={styles.socialIcon} />
            </li>

            <li>
              <img src={youtubeIcon} className={styles.socialIcon} />
            </li>
          </ul>
        </div>

        <div>
          <p className={styles.copyright}>Copyright © Punk Juice 2023 </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
