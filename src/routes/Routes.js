import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Details from "../pages/article-details/Details";

function RoutesManager() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/article-details/:articleName" element={<Details />} />
    </Routes>
  );
}

export default RoutesManager;
