import { useEffect, useState } from "react";
import styles from "../Carousel.module.css";

let cards = [];

function loadCards() {
  cards = document.querySelectorAll(`#cardsContainer > div`);
  return;
}

function useCarousel(teamArray) {
  const changeCard = (e) => {
    try {
      const direction = e.target.parentElement.attributes.direction.value;
      let nextIndex = null;

      if (direction === "next") {
        nextIndex = activeIndex + 1 === teamArray.length ? 0 : activeIndex + 1;
      } else {
        nextIndex =
          activeIndex - 1 < 0 ? teamArray.length - 1 : activeIndex - 1;
      }

      cards[activeIndex].classList.remove(styles.active);
      cards[nextIndex].classList.add(styles.active);

      setActiveIndex(nextIndex);
    } catch (err) {
      return;
    }
  };

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    loadCards();
  }, [teamArray]);

  return changeCard;
}

export default useCarousel;
