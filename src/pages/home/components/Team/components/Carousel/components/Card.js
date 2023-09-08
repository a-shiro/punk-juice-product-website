// Components
import LazyImage from "../../../../../../../common/components/LazyImage/LazyImage";
// CSS
import styles from "./Card.module.css";

function Card({ member, isActive }) {
  return (
    <div className={`${styles.card} ${isActive ? styles.cardActive : ""}`}>
      <LazyImage
        src={member.photoSmall}
        srcBlurry={member.photoBlurry}
        srcSet={`${member.photoSmall} 1200w, ${member.photoMedium} 1520w, ${member.photoLarge} 1920w`}
        sizes="(min-width: 1220px) 30vw, 100vw"
        alt="team-member"
        stylesList={{
          blurryLoading: styles.blurLoad,
          completedLoading: styles.loaded,
          image: styles.photo,
        }}
      />

      <div className={styles.details}>
        <h3>{member.name}</h3>
        <p>{member.position}</p>
      </div>
    </div>
  );
}

export default Card;
