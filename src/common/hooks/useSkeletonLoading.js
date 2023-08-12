import { useEffect, useState } from "react";

function useSkeletonLoading(currentPath) {
  const [skeletonLoading, setSkeletonLoading] = useState(true);

  useEffect(() => {
    setSkeletonLoading(true);

    const timer = setTimeout(() => {
      setSkeletonLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentPath]);

  return skeletonLoading;
}

export default useSkeletonLoading;
