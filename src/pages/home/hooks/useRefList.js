import { useRef } from "react";

function useRefList() {
  const heroRef = useRef(null);
  const teamRef = useRef(null);
  const productRef = useRef(null);
  const articlesRef = useRef(null);
  const contactRef = useRef(null);

  return {
    hero: heroRef,
    team: teamRef,
    product: productRef,
    articles: articlesRef,
    contact: contactRef,
  };
}

export default useRefList;
