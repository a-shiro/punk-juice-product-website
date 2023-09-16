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
    threshold: 1,
  });

  elements.map((element) => {
    console.log(element.current);
    element.current && observer.observe(element.current);
  });
}

function useTriggerAnimation(elements) {
  useEffect(() => {
    createObserver(elements);
  }, []);
}

export default useTriggerAnimation;
