import React from "react";
import { IDescription } from "../../Interfaces/Interfaces";
import "./Description.scss";

export const Description: React.FC<IDescription> = ({text, value}) => {
  return (
    <div className="Description">
        <div className="Description-text">
            {text}
        </div>
        <div className="Description-value">
            {value}
        </div>
    </div>
  );
};
