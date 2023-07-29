import styles from "./Home.module.css";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Team from "./components/Team/Team";
import Product from "./components/Product/Product";
import Articles from "./components/Articles/Articles";

function Home() {
  return (
    <main>
      <Hero />

      <Nav />

      <Team />

      <Product />

      <Articles />
    </main>
  );
}

export default Home;
