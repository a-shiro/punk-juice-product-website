import { where } from "firebase/firestore";
// Hooks
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// Components
import LoadingOverlay from "../../common/components/LoadingOverlay/LoadingOverlay";
import { Navigate, Outlet } from "react-router-dom";
// Services
import { fetchDataWhere } from "../../services/queries";

function URLValidatorGuard() {
  const path = useParams();
  const [itemExists, setItemExists] = useState(null);

  useEffect(() => {
    const requestPath = async () => {
      const data = await fetchDataWhere("article-paths", [
        where("path", "==", path.articleName),
      ]);

      setItemExists(data);
    };

    requestPath();
  }, []);

  if (!itemExists) {
    return <LoadingOverlay />;
  }

  if (!itemExists.length) {
    return <Navigate to="page-not-found" />;
  }

  return <Outlet />;
}

export default URLValidatorGuard;
