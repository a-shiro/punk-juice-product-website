// Hooks
import { useEffect } from "react";
// CSS
import styles from "../styles/Animations.module.css";

function triggerAnimation(entries, observer) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(styles.fadeIn);

      observer.unobserve(entry.target);
    }
  });
}

function createObserver(elements) {
  const observer = new IntersectionObserver(triggerAnimation, {
    threshold: window.innerWidth <= 720 ? 0.5 : 1,
  });

  elements.map((element) => {
    element.current && observer.observe(element.current);
  });
}

function useTriggerAnimation(elements) {
  useEffect(() => {
    createObserver(elements);
  }, []);
}

export default useTriggerAnimation;
