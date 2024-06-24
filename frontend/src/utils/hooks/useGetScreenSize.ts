"use client";

import { useEffect, useMemo, useState } from "react";

export const useGetScreenSize = () => {
  const [screenSize, setScreenSize] = useState<number>(0);
  const isMobile = useMemo(() => screenSize < 768, [screenSize]);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { screenSize, isMobile };
};
