import React from "react";
import Item from "../Item";
import "./ConstructorCart.scss";

export const ConstructorCart: React.FC = () => {
  return (
    <div className="ConstructorCart">
      <div className="ConstructorCart-text">
      Конструктор подарка 
      </div>
      <div className="ConstructorCart-CartItem">
        <div className="ConstructorCart-text-group">
          Коробка
        </div>
        <Item/>
      </div>
      <div className="ConstructorCart-CartItem">
        <div className="ConstructorCart-text-group">
          Наполнение
        </div>
      </div>
    </div>
  );
};
