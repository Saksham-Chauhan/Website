import React from "react";
import "./style.scss";

interface Props {
  type: "WithBg" | "WithBorder" | "TransparentBg";
  text: string;
}
export const Button = ({ type, text }: Props) => {
  switch (type) {
    case "TransparentBg":
      return <Transparent {...{ text }} />;
    case "WithBg":
      return <Background {...{ text }} />;
    case "WithBorder":
      return <Border {...{ text }} />;
    default:
      return <Transparent {...{ text }} />;
  }
};

const Background = ({ text }: { text: string }) => (
  <div className="bg-button">{text}</div>
);
const Border = ({ text }: { text: string }) => (
  <div className="with-border">{text}</div>
);
const Transparent = ({ text }: { text: string }) => (
  <div className="transparent-bg">{text}</div>
);
