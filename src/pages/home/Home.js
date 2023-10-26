// Hooks
import { useEffect } from "react";
// Components
import { Helmet } from "react-helmet-async";
import Hero from "./components/Hero/Hero";
import Nav from "../../common/components/Nav/Nav";
import IntroductionText from "./components/IntroductionText/IntroductionText";
import Team from "./components/Team/Team";
import Product from "./components/Product/Product";
import Articles from "./components/Articles/Articles";
import Contact from "./components/Contact/Contact";
import Map from "./components/Map/Map";
// Utils
import scroll from "./utils/scroll";

function Home() {
  useEffect(() => {
    scroll();
  }, []);

  return (
    <>
      <Helmet>
        <title>Punk Juice - Home</title>
      </Helmet>

      <header>
        <Hero />
      </header>

      <Nav />
      <IntroductionText />
      <Team />
      <Product />
      <Articles />
      <Contact />
      <Map />
    </>
  );
}

export default Home;
