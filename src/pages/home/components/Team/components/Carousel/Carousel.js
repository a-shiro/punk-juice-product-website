// Components
import Card from "./components/Card";
// Hooks
import { useEffect, useState } from "react";
import useCarousel from "./hooks/useCarousel";
// Data
import { fetchData } from "../../../../../../services/queries";
// CSS
import styles from "./Carousel.module.css";
// Static files
import arrowIcon from "../../../../../../assets/icons/arrow.png";

function Carousel() {
  const [team, setTeam] = useState();
  const changeCard = useCarousel(team);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData("team");

      setTeam(data);
    };

    getData();
  }, []);

  return (
    <div className={styles.carousel}>
      <div id="cardsContainer">
        {team?.map((member, index) => {
          return <Card member={member} isActive={index === 0} key={index} />;
        })}
      </div>

      <div className={styles.controls}>
        <img
          onClick={changeCard}
          src={arrowIcon}
          alt="arrow-prev"
          direction="prev"
        />

        <img
          onClick={changeCard}
          src={arrowIcon}
          alt="arrow-next"
          direction="next"
        />
      </div>
    </div>
  );
}

export default Carousel;
