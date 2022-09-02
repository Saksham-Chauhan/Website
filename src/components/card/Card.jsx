import React from "react";
import { Button } from "../button/Button";
import { ListItem } from "../list-item/ListItem";
import "./card.css";

export const Card = ({ title, price, list }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <div>
        <span>{price} </span>/month
      </div>
      <div></div>
      <p>Everything in Basic, and</p>
      {list.map((item, i) => (
        <ListItem key={i} item={item}>
          {item}
        </ListItem>
      ))}
      <Button />
    </div>
  );
};
