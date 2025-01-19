import { useEffect, useState } from "react";

const useScrollHandler = (elementId) => {
  const [showCTA, setShowCTA] = useState(false);
  const [showPersistentCta, setShowPersistentCta] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const bannerHeight =
        document.getElementById(elementId)?.offsetHeight || 0;
      const scrolled = window.scrollY;

      setShowCTA(scrolled > bannerHeight);

      if (scrolled > prevScrollY && scrolled > 0) {
        setShowPersistentCta(true);
      } else {
        setShowPersistentCta(false);
      }

      setPrevScrollY(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollY, elementId]);

  return { showCTA, showPersistentCta };
};

export default useScrollHandler;
