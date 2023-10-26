// Components
import { HelmetProvider } from "react-helmet-async";
import { Route, Routes } from "react-router-dom";
import URLValidatorGuard from "./guards/URLValidatorGuard";
import Home from "../pages/home/Home";
import NotFound from "../pages/notFound/NotFound";
import Details from "../pages/articleDetails/Details";

function RoutesManager() {
  return (
    <HelmetProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<URLValidatorGuard />}>
          <Route path="/article-details/:articleName" element={<Details />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </HelmetProvider>
  );
}

export default RoutesManager;
