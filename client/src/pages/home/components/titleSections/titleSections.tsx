import React from "react";
import arrowUp from "../../../../assets/img/arrow-up-right.svg";
import "./styles.css";

interface TitleSectionProps {
  title: string;
  subTitle: string;
  btnTitle: string;
  primaryLink?: {
    name: string;
    onClick: (navigateTo: any) => void;
  };
}

const TitleSection: React.FC<TitleSectionProps> = ({
  title,
  subTitle,
  btnTitle,
  primaryLink,
}) => {
  return (
    <div className="main-container">
      <div className="title-section">
        <h1>{title}</h1>
        <p>{subTitle}</p>
      </div>
      <button onClick={primaryLink?.onClick} className="button-title">{
        <div className="btn-section">
          <p>{btnTitle}</p>
          <img className="arrowUp" src={arrowUp} alt="arrowUp" />
        </div>
      }</button>
    </div>
  );
};

export default TitleSection;
