import React from "react";
import Item from "../Item";
import ItemFiller from "../ItemFiller";
import "./ConstructorCart.scss";
import {IBox} from "../../Interfaces/Interfaces"
import {IFillers } from "../../Interfaces/Interfaces"

interface IProps{
  Box? : IBox;
  Fillers? : IFillers[];
}

export const ConstructorCart: React.FC<IProps> = ({Box, Fillers}) => {
  return (
    <div className="ConstructorCart">
      <div className="ConstructorCart-text">
      Конструктор подарка 
      </div>
      <div className="ConstructorCart-CartItem">
        <div className="ConstructorCart-text-group">
          Коробка
        </div>
            <Item name={Box?.name} description={Box?.description}/>
      </div>
      <div className="ConstructorCart-CartItem">
        <div className="ConstructorCart-text-group">
          Наполнение
        </div>
        {
          Fillers?.map(f => (
            <ItemFiller name={f.name} price={f.price} key={f.id}/>
          ))
        }
      </div>
    </div>
  );
};
