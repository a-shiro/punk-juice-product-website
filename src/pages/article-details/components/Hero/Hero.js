// Components
import LazyImage from "../../../../common/components/LazyImage/LazyImage";
// CSS
import styles from "./Hero.module.css";

function Hero({ article }) {
  return (
    <section className={styles.section}>
      <hgroup className={styles.headerTitles}>
        <h1>{article?.heroTitle}</h1>
        <h2>{article?.heroSubtitle}</h2>
      </hgroup>

      <LazyImage
        src={article?.heroImageSmall}
        srcSet={`${article?.heroImageSmall} 1200w, ${article?.heroImageMedium} 1520w, ${article?.heroImageLarge} 1920w`}
        srcBlurry={article?.heroImageBlurry}
        sizes="100vw"
        alt="background-cover"
        stylesList={{
          blurryLoading: styles.blurLoad,
          completedLoading: styles.loaded,
          image: styles.backgroundImage,
          aspectRatio: "4 / 2.5",
        }}
      />

      <div className={styles.overlay}></div>
    </section>
  );
}

export default Hero;
