import React from "react";
import Description from "../Description";
import { IBox } from "../../Interfaces/Interfaces";
import "./Item.scss";

export const Item: React.FC<IBox> = ({name, description}) => {
  return (
    <div className="Item">
      <div className="Item-Name">
        {name}
      </div>
      {
        description?.map(
          d => ( 
          <Description text={d.text} value={d.value} key={d.id}/>
          )
        )
      
      }
     </div>
  );
};
