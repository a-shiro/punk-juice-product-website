import { useEffect, useState } from "react";
import { fetchData } from "../../../services/queries";

function getCurrentArticle(articles, urlPath) {
  return articles.filter((x) => x.path === urlPath.articleName)[0];
}

function getNextArticle(articles, currentArticle) {
  let nextArticleIndex = articles.indexOf(currentArticle) + 1;
  return nextArticleIndex >= articles.length
    ? articles[0]
    : articles[nextArticleIndex];
}

function useGetPageResources(urlPath) {
  const [currentArticle, setCurrentArticle] = useState(null);
  const [nextArticle, setNextArticle] = useState(null);

  useEffect(() => {
    const requestArticles = async () => {
      const allArticles = await fetchData("articles");

      const currentArticle = getCurrentArticle(allArticles, urlPath);
      const nextArticle = getNextArticle(allArticles, currentArticle);

      setCurrentArticle(currentArticle);
      setNextArticle(nextArticle);
    };

    requestArticles();
  }, [urlPath]);

  // Figure out this scroll to
  window.scrollTo(0, 0);

  return [currentArticle, nextArticle];
}

export default useGetPageResources;
