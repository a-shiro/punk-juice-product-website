import { useEffect } from "react";
import styles from "../Carousel.module.css";

let cards = [];

function getActiveIndex() {
  return cards.findIndex((card) => card.classList.length > 1);
}

function getNextIndex(activeIndex, event) {
  const direction =
    event === undefined ? "next" : event.target.attributes.direction.value;

  return direction === "next"
    ? activeIndex + 1 === cards.length
      ? 0
      : activeIndex + 1
    : activeIndex - 1 < 0
    ? cards.length - 1
    : activeIndex - 1;
}

function loadCards() {
  return (cards = Array.from(
    document.querySelectorAll(`#cardsContainer > div`)
  ));
}

function useCarousel(teamArray) {
  const changeCard = (event) => {
    const activeIndex = getActiveIndex();
    const nextIndex = getNextIndex(activeIndex, event);

    cards[activeIndex].classList.remove(styles.active);
    cards[nextIndex].classList.add(styles.active);
  };

  useEffect(() => {
    teamArray.length > 0 && loadCards();

    const interval = setInterval(() => {
      teamArray.length > 0 && changeCard();
    }, 6000);

    return () => {
      clearInterval(interval);
    };
  }, [teamArray]);

  return changeCard;
}

export default useCarousel;
