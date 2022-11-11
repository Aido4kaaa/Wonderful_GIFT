import React from "react";
import Description from "../Description";
import "./Item.scss";

export const Item: React.FC = () => {
  return (
    <div className="Item">
      <div className="Item-Name">
        Коробка №1
      </div>
      <Description text="Цена" value="200₽"/>
      <Description text="Объём" value="20х20х20"/>
      <Description text="Вес" value="500кг"/>
     </div>
  );
};
