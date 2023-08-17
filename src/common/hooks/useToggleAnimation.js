import { useEffect } from "react";
import styles from "../styles/Animations.module.css";

const animations = {
  "fade-in": styles.fadeIn,
  "fade-in-200": styles.fadeIn200,
  "fade-out": styles.fadeOut,
  "pop-up": styles.popUp,
};

function createAnimationObserver(refArray, toggle) {
  const observerThreshhold = window.innerWidth <= 720 ? 0.35 : 0.8;

  const observer = new IntersectionObserver(toggle, {
    threshold: observerThreshhold,
  });

  refArray.map((element) => {
    if (element) {
      return observer.observe(element.current);
    }
  });
}

function useToggleAnimation(refArray) {
  const toggle = (entries) => {
    entries.map((entry) => {
      const animationType = entry.target.attributes.aos.value;
      const child = entry.target.children[0];

      if (entry.boundingClientRect.y >= 0) {
        if (entry.isIntersecting) {
          child.classList.add(animations[animationType]);
          child.classList.remove(styles.fadeOut);
          return;
        }
        child.classList.add(styles.fadeOut);
        child.classList.remove(animations[animationType]);
      }
    });
  };

  useEffect(() => {
    createAnimationObserver(refArray, toggle);
  }, []);
}

export default useToggleAnimation;
