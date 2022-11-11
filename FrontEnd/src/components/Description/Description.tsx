import React from "react";
import "./Description.scss";

interface IProps{
    text:string;
    value:string;
}

export const Description: React.FC<IProps> = ({text, value}) => {
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
