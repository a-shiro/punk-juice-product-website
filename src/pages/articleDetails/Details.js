// Hooks
import { useParams } from "react-router-dom";
import useGetResources from "./hooks/useGetResources";
// Components
import { Helmet } from "react-helmet-async";
import LoadingOverlay from "../../common/components/LoadingOverlay/LoadingOverlay";
import Hero from "./components/Hero/Hero";
import Nav from "../../common/components/Nav/Nav";
import Article from "./components/Article/Article";
import Next from "./components/Next/Next";

function Details() {
  const urlPath = useParams();
  const [article, nextArticle] = useGetResources(urlPath.articleName);

  return (
    <>
      {!article ? (
        <LoadingOverlay />
      ) : (
        <>
          <Helmet>
            <title>Punk Juice - {article.heroTitle}</title>
          </Helmet>

          <Hero article={article} />
          <Nav />
          <Article article={article} />
          <Next title={nextArticle.heroTitle} path={nextArticle.path} />
        </>
      )}
    </>
  );
}

export default Details;
