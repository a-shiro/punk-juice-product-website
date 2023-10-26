// Components
import { Link } from "react-router-dom";
// CSS
import styles from "./NotFound.module.css";
// Resources
import bottle from "../../assets/images/bottle_transparent.webp";

function NotFound() {
  return (
    <>
      <section className={styles.section}>
        <img src={bottle} alt="bottle" />
        <h1>404</h1>
        <p>
          This page seems to have gone on vacation and can't be found right now.
        </p>
        <Link to="/">Home</Link>
      </section>
    </>
  );
}

export default NotFound;
