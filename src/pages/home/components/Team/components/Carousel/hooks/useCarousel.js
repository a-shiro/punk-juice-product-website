// Hooks
import { useEffect } from "react";
// CSS
import styles from "../components/Card.module.css";

let cards = [];

function loadCards() {
  return (cards = Array.from(
    document.querySelectorAll(`#cardsContainer > div`)
  ));
}

function changeCard(event) {
  const activeCard = getActiveCard();
  const nextCard = getNextCard(activeCard, event);

  cards[activeCard].classList.remove(styles.cardActive);
  cards[nextCard].classList.add(styles.cardActive);
}

function getActiveCard() {
  return cards.findIndex((card) => card.classList.length > 1);
}

function getNextCard(activeCard, event) {
  const direction = event ? event.target.attributes.direction.value : "next";

  if (direction === "next") {
    return activeCard + 1 < cards.length ? activeCard + 1 : 0;
  } else {
    return activeCard - 1 < 0 ? cards.length - 1 : activeCard - 1;
  }
}

function useCarousel(data) {
  useEffect(() => {
    if (data) {
      loadCards();

      const interval = setInterval(() => {
        changeCard();
      }, 6000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [data]);

  return changeCard;
}

export default useCarousel;
