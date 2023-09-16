import React, { useEffect, useState } from "react";
import { BiArrowToTop } from "react-icons/bi";
import "./GotoTop.css"
const GotoTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const gotoBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);
  return (
    <div>
      {isVisible && (
        <div>
          <BiArrowToTop
            onClick={gotoBtn}
            className="bg-gradient-to-r from-[rgb(146,70,142)] to-[#38235D]  float-right text-3xl top-btn   cursor-pointer"
          />
        </div>
      )}
    </div>
  );
};

export default GotoTop;
