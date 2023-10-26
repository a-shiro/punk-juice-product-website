import { useEffect, useRef } from "react";

function LazyImage({ src, srcBlurry, srcSet, sizes, alt, stylesList }) {
  const blurDivRef = useRef();
  const imageRef = useRef();

  function loaded() {
    blurDivRef.current?.classList.add(stylesList.completedLoading);
  }

  useEffect(() => {
    if (imageRef.current.complete) {
      loaded();
    } else {
      imageRef.current.addEventListener("load", loaded);
    }
  }, []);

  return (
    <div
      ref={blurDivRef}
      className={`${stylesList.blurryLoading}`}
      style={{
        backgroundImage: `url("${srcBlurry}")`,
        aspectRatio: stylesList.aspectRatio,
      }}
    >
      <img
        ref={imageRef}
        className={stylesList.image}
        style={{ aspectRatio: stylesList.aspectRatio }}
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading="lazy"
      />
    </div>
  );
}

export default LazyImage;
