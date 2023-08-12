import Hero from "./components/Hero/Hero";
import Nav from "../../common/components/Nav/Nav";
import Team from "./components/Team/Team";
import Product from "./components/Product/Product";
import Articles from "./components/Articles/Articles";
import ContactForm from "./components/ContactForm/ContactForm";
import Map from "./components/Map/Map";

function Home() {
  return (
    <main>
      <Hero />

      <Nav />

      <Team />

      <Product />

      <Articles />

      <ContactForm />

      <Map />
    </main>
  );
}

export default Home;
