import { useRef, useState } from "react";
import styles from "./Heading.module.css";
import useToggleAnimation from "../../../../../../common/hooks/useToggleAnimation";

function Heading() {
  const title = useRef();
  const textLeft = useRef();
  const textRight = useRef();

  useToggleAnimation([title, textLeft, textRight]);

  return (
    <hgroup className={styles.container}>
      <div
        obeserverbox="obeserverbox"
        animation="fade-in"
        threshold={1}
        ref={title}
      >
        <h2>Join the movement...</h2>
      </div>

      <div
        obeserverbox="observerbox"
        animation="fade-in"
        threshold={window.innerWidth <= 720 ? 0 : 1}
        ref={textLeft}
      >
        <p>
          Inspired by the unapologetic spirit of punk rock, this audacious drink
          is a fusion of unconventional ingredients that come together to create
          a sensory rebellion. From the first sip to the last drop,{" "}
          <strong>Punk Juice</strong> will challenge your taste perceptions and
          leave you craving for more.
        </p>
      </div>

      <div
        obeserverbox="obeserverbox"
        animation="fade-in"
        threshold={window.innerWidth <= 720 ? 0.2 : 1}
        ref={textRight}
      >
        <p>
          From the rebellious fusion of fruits to the daring hint of spice,{" "}
          <strong>Punk Juice</strong> dares you to be bold and unapologetically
          yourself. Raise your glass and join the movement – because in a world
          of conformity, <strong>Punk Juice</strong> stands tall as the rebel
          with a cause, redefining refreshment one sip at a time.
        </p>
      </div>
    </hgroup>
  );
}

export default Heading;
