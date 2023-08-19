import { useEffect, useState } from "react";
import { fetchData } from "../../../../../../../services/queries";
import styles from "./Carousel.module.css";
import arrowIcon from "../../../../../../../assets/icons/arrow.png";
import useCarousel from "./hooks/useCarousel";

function Carousel() {
  const [teamArray, setTeamArray] = useState([]);
  const changeCard = useCarousel(teamArray);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData("team");
      setTeamArray(data);
    };

    getData();
  }, []);

  return (
    <div className={styles.carousel}>
      <div id="cardsContainer">
        {teamArray?.map((member, index) => {
          return (
            <div
              className={`${styles.card} ${index === 0 ? styles.active : ""}`}
              key={index}
            >
              <img
                className={styles.photo}
                src={member.photo}
                alt="team-member"
              />

              <div className={styles.detailsContainer}>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            </div>
          );
        })}
      </div>

      <button onClick={changeCard} className={styles.btnPrev} direction="prev">
        <img src={arrowIcon} alt="arrow-prev" direction="prev" />
      </button>

      <button onClick={changeCard} className={styles.btnNext} direction="next">
        <img src={arrowIcon} alt="arrow-next" direction="next" />
      </button>
    </div>
  );
}

export default Carousel;
