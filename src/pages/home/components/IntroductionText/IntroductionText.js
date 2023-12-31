// Hooks
import { useRef } from "react";
import useTriggerAnimation from "../../../../common/hooks/useTriggerAnimation";
// CSS
import styles from "./IntroductionText.module.css";

function IntroductionText() {
  const title = useRef();
  const text = useRef();

  useTriggerAnimation([title, text]);

  return (
    <section className={styles.section}>
      <h1 ref={title} className={styles.title}>
        Join the movement...
      </h1>

      <div ref={text} className={styles.textContainer}>
        <p>
          Inspired by the unapologetic spirit of punk rock, this audacious drink
          is a fusion of unconventional ingredients that come together to create
          a sensory rebellion. From the first sip to the last drop,{" "}
          <strong>Punk Juice</strong> will challenge your taste perceptions and
          leave you craving for more.
        </p>

        <p>
          From the rebellious fusion of fruits to the daring hint of spice,{" "}
          <strong>Punk Juice</strong> dares you to be bold and unapologetically
          yourself. Raise your glass and join the movement – because in a world
          of conformity, <strong>Punk Juice</strong> stands tall as the rebel
          with a cause, redefining refreshment one sip at a time.
        </p>
      </div>
    </section>
  );
}

export default IntroductionText;
