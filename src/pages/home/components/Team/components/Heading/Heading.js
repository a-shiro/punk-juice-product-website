import { useRef } from "react";
import styles from "./Heading.module.css";
import useToggleAnimation from "../../../../../../common/hooks/useToggleAnimation";

function Heading() {
  const title = useRef();
  const textLeft = useRef();
  const textRight = useRef();

  useToggleAnimation([title, textLeft, textRight]);

  return (
    <hgroup className={styles.container}>
      <div obeserverbox="obeserverbox" ref={title}>
        <h2 animation="fade-in">Join the movement...</h2>
      </div>

      <div obeserverbox="observerbox" ref={textLeft}>
        <p animation="fade-in">
          Inspired by the unapologetic spirit of punk rock, this audacious drink
          is a fusion of unconventional ingredients that come together to create
          a sensory rebellion. From the first sip to the last drop,{" "}
          <strong>Punk Juice</strong> will challenge your taste perceptions and
          leave you craving for more.
        </p>
      </div>

      <div obeserverbox="obeserverbox" ref={textRight}>
        <p animation="fade-in-200">
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
