import { useEffect, useState } from "react";

function useToggleAnimation(elementRef) {
  const [elementVisible, setElementVisible] = useState(true);
  const observerThreshhold = window.innerWidth <= 720 ? 0.35 : 0.6;

  const toggleVisibility = (entries) => {
    const entry = entries[0];

    if (entry.boundingClientRect.y >= 0) {
      setElementVisible(entry.isIntersecting);
    }
  };

  const observer = new IntersectionObserver(toggleVisibility, {
    threshold: observerThreshhold,
  });

  useEffect(() => {
    observer.observe(elementRef.current);
  }, []);

  return elementVisible;
}

export default useToggleAnimation;
