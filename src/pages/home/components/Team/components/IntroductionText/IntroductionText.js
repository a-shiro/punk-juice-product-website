import { useRef } from "react";
import styles from "./IntroductionText.module.css";
import useToggleAnimation from "../../../../../../common/hooks/useToggleAnimation";

function IntroductionText() {
  const titleRef = useRef();
  const textRef1 = useRef();
  const textRef2 = useRef();

  useToggleAnimation([titleRef, textRef1, textRef2]);

  return (
    <div className={styles.textContainer}>
      <div ref={titleRef} className={styles.titleContainer} aos="fade-in">
        <h2>Join the movement...</h2>
      </div>

      <div ref={textRef1} aos="fade-in" className={styles.paragraphContainer}>
        <p>
          Inspired by the unapologetic spirit of punk rock, this audacious drink
          is a fusion of unconventional ingredients that come together to create
          a sensory rebellion. From the first sip to the last drop,{" "}
          <strong>Punk Juice</strong> will challenge your taste perceptions and
          leave you craving for more.
        </p>
      </div>

      <div
        ref={textRef2}
        aos="fade-in-200"
        className={styles.paragraphContainer}
      >
        <p>
          From the rebellious fusion of fruits to the daring hint of spice,{" "}
          <strong>Punk Juice</strong> dares you to be bold and unapologetically
          yourself. Raise your glass and join the movement – because in a world
          of conformity, <strong>Punk Juice</strong> stands tall as the rebel
          with a cause, redefining refreshment one sip at a time.
        </p>
      </div>
    </div>
  );
}

export default IntroductionText;
