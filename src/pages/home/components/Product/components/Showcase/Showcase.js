// Hooks
import { useEffect, useState } from "react";
// Components
import LazyImage from "../../../../../../common/components/LazyImage/LazyImage";
import LoadingSkeleton from "./components/LoadingSkeleton/LoadingSkeleton";
// CSS
import styles from "./Showcase.module.css";
// Data
import { fetchData } from "../../../../../../services/queries";

function Showcase() {
  const [images, setImages] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData("product");

      setImages(data);
    };

    getData();
  }, []);

  return (
    <div className={styles.showcaseContainer}>
      {!images ? (
        <LoadingSkeleton />
      ) : (
        <>
          <div className={styles.column}>
            <LazyImage
              src={images[2].photoSmall}
              srcSet={`${images[2].photoSmall} 1200w, ${images[2].photoMedium} 1520w, ${images[2].photoLarge} 1920w`}
              srcBlurry={images[2].photoBlurry}
              sizes="(min-width: 1200px) 45vw, 90vw"
              alt="mockup_poster"
              stylesList={{
                blurryLoading: styles.blurLoad,
                completedLoading: styles.loaded,
                image: styles.poster,
                aspectRatio: "4 / 2.65",
              }}
            />

            <LazyImage
              src={images[1].photoSmall}
              srcSet={`${images[1].photoSmall} 1200w, ${images[1].photoMedium} 1466w, ${images[1].photoLarge} 1566w`}
              srcBlurry={images[1].photoBlurry}
              alt="poster"
              stylesList={{
                blurryLoading: styles.blurLoad,
                completedLoading: styles.loaded,
                image: styles.poster,
                aspectRatio: "9 / 12",
              }}
            />
          </div>
          <div className={styles.column}>
            <LazyImage
              src={images[0].photoSmall}
              srcSet={`${images[0].photoSmall} 1200w, ${images[0].photoMedium} 1466w, ${images[0].photoLarge} 1566w`}
              srcBlurry={images[0].photoBlurry}
              sizes="(min-width: 1200px) 45vw, 90vw"
              alt="mockup_poster"
              stylesList={{
                blurryLoading: styles.blurLoad,
                completedLoading: styles.loaded,
                image: styles.poster,
                aspectRatio: "9 / 12",
              }}
            />

            <LazyImage
              src={images[3].photoSmall}
              srcSet={`${images[3].photoSmall} 1200w, ${images[3].photoMedium} 1466w, ${images[3].photoLarge} 1566w`}
              srcBlurry={images[3].photoBlurry}
              sizes="(min-width: 1200px) 45vw, 90vw"
              alt="poster"
              stylesList={{
                blurryLoading: styles.blurLoad,
                completedLoading: styles.loaded,
                image: styles.poster,
                aspectRatio: "4 / 2.65",
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Showcase;
