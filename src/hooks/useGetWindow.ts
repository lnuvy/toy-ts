import { useState, useEffect } from "react";

function getWindowDimensions() {
  const width = window?.innerWidth;
  const height = window?.innerHeight;
  // const { innerWidth: width, innerHeight: height } = global.window;
  return {
    width: Math.min(width, 450),
    height,
  };
}

// 현재 브라우저 크기 반환
const useGetWindow = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (!global?.window) return;
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowDimensions;
};

export default useGetWindow;
