// hooks/useLeadInfo.js
import { useState } from "react";
import { useRouter } from "next/router";

const useLeadInfo = () => {
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const hasLeadEmail = localStorage.getItem("leadInfo");
    

  // const handleClick = () => {
  //   const clickedUrl = `/learn/pm-interview/product-design/1-design-atm`;
  //   localStorage.setItem("clickedUrl", clickedUrl);
  //   if (hasLeadEmail) {
  //     router.push("/learn/pm-interview/product-design/1-design-atm");
  //   } else {
  //     setShowModal(true);
  //   }
  // };
  const handleClick = (clickedUrl) => {
    console.log("firsth", clickedUrl);
    localStorage.setItem("clickedUrl", clickedUrl);
    if (hasLeadEmail) {
      router.push(clickedUrl);
    } else {
      setShowModal(true);
    }
  };

  return { showModal, setShowModal, handleClick };
};

export default useLeadInfo;
