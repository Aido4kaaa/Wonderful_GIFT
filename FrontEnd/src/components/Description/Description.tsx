import React from "react";
import "./Description.scss";
import "../Card/Card.scss"

interface IProps{
  text : string | undefined;
  value : string | undefined;
  DescriptionText? : string;
  DescriptionValue? : string;
}

export const Description: React.FC<IProps> = ({text, value, DescriptionText = "Description-text", DescriptionValue = "Description-value"}) => {
  return (
    <div className="Description">
        <div className={DescriptionText}>
            {text}
        </div>
        <div className={DescriptionValue}>
            {value}
        </div>
    </div>
  );
};
