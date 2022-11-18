import React from "react";
import Description from "../Description";
import { IFillers } from "../../Interfaces/Interfaces";
import "./ItemFiller.scss";


export const ItemFiller: React.FC<IFillers> = ({name, price}) => {
  return (
    <div className="Item">
      <div className="Item-Name">
        {name}
      </div>
      <Description text="Цена" value={price?.toString()}/>
     </div>
  );
};
