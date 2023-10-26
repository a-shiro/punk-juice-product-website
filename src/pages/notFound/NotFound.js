// Components
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
// CSS
import styles from "./NotFound.module.css";
// Resources
import bottle from "../../assets/images/bottle_transparent.webp";

function NotFound() {
  return (
    <>
      <Helmet>
        <title>Punk Juice - Not found</title>
      </Helmet>

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
