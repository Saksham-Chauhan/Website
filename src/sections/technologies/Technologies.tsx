import React from "react";
import { technologiesIconsData } from "../../assets/images";
import "./style.scss";

export const Technologies = () => {
  const [renderIcons, setRenderIcons] = React.useState(false);

  React.useEffect(() => {
    let getOffsetTop = function (elem: any) {
      let distance = 0;
      if (elem.offsetParent) {
        do {
          distance += elem.offsetTop;
          elem = elem.offsetParent;
        } while (elem);
      }
      return distance < 0 ? 0 : distance;
    };

    let elem = document.querySelector("#technologies");
    let offset = getOffsetTop(elem);

    window.onscroll = () => {
      if (offset <= window.pageYOffset + 200) {
        setRenderIcons(true);
      }
    };
  });
  return (
    <div className="technologies" id="technologies">
      <h1>Technologies</h1>
      <h2>that make sense</h2>
      <div className="images-container">
        {renderIcons &&
          technologiesIconsData.map((item, i) => (
            <img
              src={item.src}
              key={i}
              alt=""
              style={{
                ...item.position,
                animationDelay: `${(Math.random() * 10) / 10}s`,
              }}
              className="icons"
            />
          ))}
      </div>
    </div>
  );
};
