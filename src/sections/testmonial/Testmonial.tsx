import React, { useState } from "react";

import { testmonialdata } from "../../helper/constant";
import {
  githubLogo,
  googleLogo,
  indianFlag,
  instaLogo,
} from "../../assets/images";

import "./style.scss";

const IMAGES_SRC = [indianFlag, githubLogo, instaLogo, googleLogo];

export const Testmonial = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="testmonial">
      <h1>Don’t just take our word for it.</h1>
      <p>
        Take a look at what a few of our most successful customers have to say
        about Koders.
      </p>
      <InfoBox {...{ ...testmonialdata[index], imgSrc: IMAGES_SRC[index] }} />
      <ButtonsGroup
        {...{
          buttons: [
            { img: indianFlag, id: 0 },
            { img: githubLogo, id: 1 },
            { img: instaLogo, id: 2 },
            { img: googleLogo, id: 3 },
          ],
          setIndex,
          index,
        }}
      />
    </div>
  );
};

interface InfoBoxProps {
  text: string;
  title: string;
  imgSrc: string;
}

const InfoBox = ({ text, title, imgSrc }: InfoBoxProps) => {
  return (
    <div className="testmonial-info">
      <div>
        <p>{text}</p>
        <button>Learn More</button>
      </div>
      <div>
        <img src={imgSrc} alt="" />
        <span>{title}</span>
      </div>
    </div>
  );
};

interface ButtonsGroupProps {
  buttons: Array<{ id: number; img: string }>;
  setIndex: (num: number) => void;
  index: number;
}

const ButtonsGroup = ({ buttons, setIndex, index }: ButtonsGroupProps) => {
  return (
    <div className="button-group">
      {buttons.map((item, i) => (
        <div
          key={i}
          onClick={() => setIndex(i)}
          style={{ opacity: item.id === 0 ? 0.4 : 1 }}
        >
          <img src={item.img} alt="" />
        </div>
      ))}
    </div>
  );
};
