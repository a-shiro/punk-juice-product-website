import styles from "./Home.module.css";
import Hero from "./components/Hero/Hero";
import Nav from "./components/Nav/Nav";
import Team from "./components/Team/Team";

function Home() {
  return (
    <main>
      <Hero />

      <Nav />

      <Team />
    </main>
  );
}

export default Home;
