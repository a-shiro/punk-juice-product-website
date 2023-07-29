import styles from "./Home.module.css";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Team from "./components/Team/Team";
import Product from "./components/Product/Product";

function Home() {
  return (
    <main>
      <Hero />

      <Nav />

      <Team />

      <Product />
    </main>
  );
}

export default Home;
