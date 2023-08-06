import { useParams } from "react-router-dom";
import { useGetPageResources } from "./hooks/useGetPageResources";
import Hero from "./components/Hero/Hero";
import Nav from "../../common/Nav/Nav";
import Article from "./components/Article/Article";
import Next from "./components/Next/Next";

function Details() {
  const currentPath = useParams();
  const [article, nextArticle] = useGetPageResources(currentPath);

  return (
    <main>
      <Hero article={article} />
      <Nav />
      <Article article={article} />
      <Next path={nextArticle?.path} />
    </main>
  );
}

export default Details;
