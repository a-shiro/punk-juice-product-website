import { useRef } from "react";
import { Link } from "react-router-dom";
import Carousel from "./components/Carousel/Carousel";
import styles from "./About.module.css";
import useToggleAnimation from "../../../../../../common/hooks/useToggleAnimation";
import scroll from "../../../../utils/scroll";
import poster from "../../../../../../assets/images/poster_1.jpg";

function About() {
  const title = useRef();
  const subtitle = useRef();
  const links = useRef();
  useToggleAnimation([title, subtitle, links]);

  return (
    <div className={styles.container}>
      <div>
        <img className={styles.poster} src={poster} alt="poster" />
      </div>

      <div className={styles.textContainer}>
        <div
          observerbox="observerbox"
          animation="fade-in"
          threshold={1}
          ref={title}
        >
          <h3>We’re - daring and unapologetically advanced.</h3>
        </div>

        <div
          observerbox="observerbox"
          animation="fade-in"
          threshold={1}
          ref={subtitle}
        >
          <p>Over five years in the production business</p>
        </div>

        <div
          observerbox="observerbox"
          animation="pop-up"
          threshold={1}
          ref={links}
        >
          <div onClick={scroll}>
            <Link to="/#articles">Read News & Events</Link>
            <Link to="/#contact">Work with Us</Link>
          </div>
        </div>
      </div>

      <Carousel />
    </div>
  );
}

export default About;
