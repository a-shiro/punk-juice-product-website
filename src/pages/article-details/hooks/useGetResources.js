// Hooks
import { useEffect, useState } from "react";
// Services
import { fetchData } from "../../../services/queries";

function getArticle(articles, articleName) {
  return articles.filter((x) => x.path === articleName)[0];
}

function getNextArticle(articles, currentArticle) {
  const nextArticleIndex =
    (articles.indexOf(currentArticle) + 1) % articles.length;
  return articles[nextArticleIndex];
}

function useGetResources(articleName) {
  const [article, setArticle] = useState(null);
  const [nextArticle, setNextArticle] = useState(null);

  useEffect(() => {
    const requestArticles = async () => {
      // Requesting all articles is bad, fix logic
      const data = await fetchData("articles");

      const article = getArticle(data, articleName);
      const nextArticle = getNextArticle(data, article);

      setArticle(article);
      setNextArticle(nextArticle);
    };

    requestArticles();

    return () => {
      setArticle(null);
      setNextArticle(null);
    };
  }, [articleName]);

  window.scrollTo(0, 0);

  return [article, nextArticle];
}

export default useGetResources;
