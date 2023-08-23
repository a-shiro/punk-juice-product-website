const SECTION_IDS = ["hero", "team", "product", "articles", "contact"];

function getSectionId(hash) {
  const id = hash.replace("#", "");
  return !SECTION_IDS.includes(id) ? "hero" : id;
}

function scroll() {
  const id = getSectionId(window.location.hash);

  return document.getElementById(id)?.scrollIntoView();
}

export default scroll;
