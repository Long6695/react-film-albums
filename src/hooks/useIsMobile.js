import { useState, useEffect } from 'react';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [width, setWidth] = useState();
  const getWidthWindow = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', getWidthWindow);
    getWidthWindow();

    if (width <= 1000) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }

    return () => {
      window.removeEventListener('resize', getWidthWindow);
    };
  }, [width]);

  return isMobile;
};

export default useIsMobile;
