// Components
import LazyImage from "../../../../common/components/LazyImage/LazyImage";
import Carousel from "./components/Carousel/Carousel";
import Info from "./components/Info/Info";
// CSS
import styles from "./Team.module.css";
// Static files
import posterBlurry from "../../../../assets/images/poster_1_blurry.webp";
import posterSmall from "../../../../assets/images/poster_1_small.webp";
import posterMedium from "../../../../assets/images/poster_1_medium.webp";
import posterLarge from "../../../../assets/images/poster_1_large.webp";

function Team() {
  return (
    <section id="team" className={styles.section}>
      <LazyImage
        src={posterSmall}
        srcBlurry={posterBlurry}
        srcSet={`${posterSmall} 720w, ${posterMedium} 1200w, ${posterLarge} 1520w`}
        sizes="(min-width: 1220px) 40vw, 100vw"
        alt="poster"
        stylesList={{
          blurryLoading: styles.blurLoad,
          completedLoading: styles.loaded,
          image: styles.poster,
        }}
      />

      <Info />

      <Carousel />
    </section>
  );
}

export default Team;
