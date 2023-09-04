import { useEffect, useRef } from "react";

function LazyImage({ classList, src, srcBlurry, srcSet, sizes, alt }) {
  const blurDivRef = useRef();
  const imageRef = useRef();

  function loaded() {
    blurDivRef.current.classList.add(classList.completedLoading);
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
      className={classList.blurryLoading}
      style={{
        backgroundImage: `url("${srcBlurry}")`,
      }}
    >
      <img
        ref={imageRef}
        className={classList.image}
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
