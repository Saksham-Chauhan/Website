import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";

import "./style.scss";
import { sleep } from "../../helper";

import { img1, img2, img3, projectOne } from "../../assets/images";

let tempCount = 0;
export const TrustedPartner = () => {
  const isRunning = useRef(false);
  const [count, setCount] = useState(tempCount);
  const [leftOutStyle, setLeftOutStyle] = useState("");
  const [rightOutStyle, setRightOutStyle] = useState("rightOut-animate");

  useEffect(() => {
    const updateAnimation = async () => {
      setLeftOutStyle("");
      setRightOutStyle("");
      if (tempCount < 3) {
        tempCount = tempCount + 1;
      } else tempCount = 0;
      setCount(tempCount);
      await sleep(2000);
      setLeftOutStyle("leftOut-animate");
      setRightOutStyle("rightOut-animate");
      await sleep(100);
      updateAnimation();
    };
    if (!isRunning.current) {
      isRunning.current = true;
      updateAnimation();
    }
  }, []);

  return (
    <div className="trusted-partner">
      <h1>Trusted by the</h1>
      {count === 0 && (
        <>
          <h2 className={`animate-heading leftIn-animate ${leftOutStyle}`}>
            Google
          </h2>
          <div className="image-container">
            <img src={projectOne} alt="" />
          </div>
        </>
      )}
      {count === 1 && (
        <>
          <h2 className={`animate-heading rightIn-animate ${rightOutStyle}`}>
            Microsoft
          </h2>
          <div className="image-container">
            <img src={img1} alt="" />
          </div>
        </>
      )}
      {count === 2 && (
        <>
          <h2 className={`animate-heading leftIn-animate ${leftOutStyle}`}>
            Facebook
          </h2>
          <div className="image-container">
            <img src={img2} alt="" />
          </div>
        </>
      )}
      {count === 3 && (
        <>
          <h2 className={`animate-heading rightIn-animate ${rightOutStyle}`}>
            Amazone
          </h2>
          <div className="image-container">
            <img src={img3} alt="" />
          </div>
        </>
      )}
    </div>
  );
};
