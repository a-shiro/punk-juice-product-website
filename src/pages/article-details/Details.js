// Hooks
import { useParams } from "react-router-dom";
import useGetResources from "./hooks/useGetResources";
// Components
import LoadingOverlay from "../../common/components/LoadingOverlay/LoadingOverlay";
import Hero from "./components/Hero/Hero";
import Nav from "../../common/components/Nav/Nav";
import Article from "./components/Article/Article";
import Next from "./components/Next/Next";
import Footer from "../../common/components/Footer/Footer";

function Details() {
  const urlPath = useParams();
  const [article, nextArticle] = useGetResources(urlPath.articleName);

  return (
    <>
      {!article ? (
        <LoadingOverlay />
      ) : (
        <>
          <header>
            <Hero article={article} />
          </header>
          <main>
            <Nav />
            <Article article={article} />
            <Next path={nextArticle.path} />
          </main>
          <footer>
            <Footer />
          </footer>
        </>
      )}
    </>
  );
}

export default Details;
