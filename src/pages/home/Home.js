import { Fragment, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Nav from "../../common/components/Nav/Nav";
import Team from "./components/Team/Team";
import Product from "./components/Product/Product";
import Articles from "./components/Articles/Articles";
import ContactForm from "./components/ContactForm/ContactForm";
import Map from "./components/Map/Map";
import SkeletonOverlay from "../../common/components/SkeletonOverlay/SkeletonOverlay";
import useGetData from "./hooks/useGetData";
import scroll from "./utils/scroll";

function Home() {
  const [team, articles] = useGetData();

  useEffect(() => {
    scroll();
  }, [team, articles]);

  return (
    <Fragment>
      {!team && !articles ? (
        <SkeletonOverlay />
      ) : (
        <Fragment>
          <header>
            <Hero />
            <Nav />
          </header>
          <main>
            <Team />
            <Product />
            <Articles articles={articles} />
            <ContactForm />
            <Map />
          </main>
        </Fragment>
      )}
    </Fragment>
  );
}

export default Home;
