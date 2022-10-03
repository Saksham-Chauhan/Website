import React from "react";
import { aero } from "../../assets/images";
import "./style.scss";

export const Hero = () => {
  return (
    <div className="hero">
      <h1>
        Infrastructure for <br /> <span>High Quality Applications</span>
      </h1>
      <p>
        Hundreds of businesses use Koders to gain techinical advantage, make
        revenues via custom softwares.
      </p>

      <button>
        Start a Project <img src={aero} alt="aero" />
      </button>
    </div>
  );
};
