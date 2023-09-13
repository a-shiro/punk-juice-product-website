import { Route, Routes } from "react-router-dom";
// Pages
import Home from "../pages/home/Home";
import Details from "../pages/article-details/Details";
import NotFound from "../pages/404-not-found/NotFound";
// Guard components
import URLValidatorGuard from "./guards/URLValidatorGuard";

function RoutesManager() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<URLValidatorGuard />}>
        <Route path="/article-details/:articleName" element={<Details />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default RoutesManager;
