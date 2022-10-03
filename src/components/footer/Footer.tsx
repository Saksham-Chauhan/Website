import React from "react";

import "./style.scss";

import { discord, github, linkedin, logo, twitter } from "../../assets/images";
import {
  legal,
  quickLinks,
  resourceBtns,
  support,
} from "../../helper/constant";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="address">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="social-media">
          {[linkedin, github, twitter, discord].map((item, i) => (
            <img key={i} src={item} alt="icon" />
          ))}
        </div>
        <p>
          175 FOREST STREET <br />
          WALTHAM MASSACHSETS 02452 <br />
          +91- 9080751290 <br />
        </p>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="btn-col">
        {[resourceBtns, quickLinks, legal, support].map((item) => (
          <ButtonsColumn
            key={item.title}
            {...{ title: item.title, buttons: item.buttons }}
          />
        ))}
      </div>
    </div>
  );
};

interface Buttons {
  to: string;
  text: string;
}
interface Props {
  title: string;
  buttons: Array<Buttons>;
}

const ButtonsColumn = ({ title, buttons }: Props) => {
  return (
    <div className="buttons-column">
      <div className="title">{title}</div>
      {buttons.map((item, i) => (
        <p key={item.text + i}>{item.text}</p>
      ))}
    </div>
  );
};
