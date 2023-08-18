import { useEffect, useState } from "react";
import { fetchData } from "../../../../../../../services/queries";
import styles from "./Carousel.module.css";
import arrowIcon from "../../../../../../../assets/icons/arrow.png";

function Carousel() {
  const [team, setTeam] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeMember, setActiveMember] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData("team");
      setTeam(data);
      setActiveMember(data[0]);
    };

    getData();
  }, []);

  const changeMember = (e) => {
    let nextIndex = null;

    try {
      if (e.target.parentElement.attributes.direction.value === "next") {
        nextIndex = activeIndex + 1 === team.length ? 0 : activeIndex + 1;
      } else {
        nextIndex = activeIndex - 1 < 0 ? team.length - 1 : activeIndex - 1;
      }
      setActiveIndex(nextIndex);
      setActiveMember(team[nextIndex]);
    } catch (err) {
      return;
    }
  };

  return (
    <div className={styles.carousel}>
      <div>
        <img
          src={activeMember?.photo}
          className={styles.teamPhoto}
          alt="team-member"
        />

        <div className={styles.teamDetailsContainer}>
          <h3>{activeMember?.name}</h3>
          <p>{activeMember?.position}</p>
        </div>
      </div>

      <button
        direction="prev"
        onClick={changeMember}
        className={styles.carouselControlPrev}
      >
        <img src={arrowIcon} alt="arrow-prev" />
      </button>
      <button
        direction="next"
        onClick={changeMember}
        className={styles.carouselControlNext}
      >
        <img src={arrowIcon} alt="arrow-next" />
      </button>
    </div>
  );
}

export default Carousel;
