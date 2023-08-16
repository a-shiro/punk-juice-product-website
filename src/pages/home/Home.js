import { Fragment, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Nav from "../../common/components/Nav/Nav";
import Team from "./components/Team/Team";
import Product from "./components/Product/Product";
import Articles from "./components/Articles/Articles";
import ContactForm from "./components/ContactForm/ContactForm";
import Map from "./components/Map/Map";
import useSkeletonLoading from "../../common/hooks/useSkeletonLoading";
import SkeletonOverlay from "../../common/components/SkeletonOverlay/SkeletonOverlay";
import { useLocation } from "react-router-dom";
import useRefList from "./hooks/useRefList";

function getCurrentHash(location, refKeys) {
  const refKey = location.hash.replace("#", "");
  return !location.hash || !refKeys.includes(refKey) ? "hero" : refKey;
}

function scrollToSection(hash, refList) {
  return refList[hash].current?.scrollIntoView({ behavior: "smooth" });
}

function Home() {
  const skeletonLoading = useSkeletonLoading();
  const refList = useRefList();
  const location = useLocation();

  useEffect(() => {
    const hash = getCurrentHash(location, Object.keys(refList));

    scrollToSection(hash, refList);
  }, [skeletonLoading, location.key]);

  return (
    <main>
      {skeletonLoading ? (
        <SkeletonOverlay />
      ) : (
        <Fragment>
          <Hero sectionRef={refList.hero} />
          <Nav />
          <Team sectionRef={refList.team} />
          <Product sectionRef={refList.product} />
          <Articles sectionRef={refList.articles} />
          <ContactForm sectionRef={refList.contact} />
          <Map />
        </Fragment>
      )}
    </main>
  );
}

export default Home;
