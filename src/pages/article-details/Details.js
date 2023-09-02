import { useParams } from "react-router-dom";
import SkeletonOverlay from "../../common/components/SkeletonOverlay/SkeletonOverlay";
import useGetPageResources from "./hooks/useGetPageResources";
import useSkeletonLoading from "../../common/hooks/useSkeletonLoading";
import Hero from "./components/Hero/Hero";
import Nav from "../../common/components/Nav/Nav";
import Article from "./components/Article/Article";
import Next from "./components/Next/Next";

function Details() {
  const currentPath = useParams();
  const [article, nextArticle] = useGetPageResources(currentPath);
  // const skeletonLoading = useSkeletonLoading(currentPath);

  return (
    <main>
      {!article ? (
        <SkeletonOverlay />
      ) : (
        <div>
          <Hero article={article} />
          <Nav />
          <Article article={article} />
          <Next path={nextArticle?.path} />
        </div>
      )}
    </main>
  );
}

export default Details;
