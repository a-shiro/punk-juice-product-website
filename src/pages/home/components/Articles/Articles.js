import { useRef } from "react";
import styles from "./Articles.module.css";
import Main from "./components/Main/Main";
import Secondary from "./components/Secondary/Secondary";
import useToggleAnimation from "../../../../common/hooks/useToggleAnimation";

function Articles({ articles }) {
  const titleRef = useRef();
  useToggleAnimation([titleRef]);

  return (
    <section id="articles" className={styles.section}>
      <div
        observerbox="observerbox"
        animation="fade-in"
        threshold={1}
        ref={titleRef}
      >
        <h2 className={styles.title}>News & Events</h2>
      </div>

      <div className={styles.articles}>
        <Main article={articles[0]} />

        <aside>
          <Secondary article={articles[1]} />
          <Secondary article={articles[2]} />
        </aside>
      </div>
    </section>
  );
}

export default Articles;
