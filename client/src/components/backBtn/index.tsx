import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../lang/translationKeys";
import ArrowLeft from "../SVGIcons/ArrowLeftIcon";
import { useState } from "react";
import "./styles.css";

type FooterProps = {
  className?: string;
  btnClassName?: string;
  textClassName?: string;
};

const BackButton = ({
  className = "",
  btnClassName = "",
  textClassName = "",
}: FooterProps) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleBack = () => navigate(-1);

  return (
    <div className={`back-button-container ${className}`}>
      <button
        className={`back-button ${btnClassName}`}
        onClick={handleBack}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <ArrowLeft color={isHovered ? "#2420d2" : "#5855FF"} size={12} />
          <span className={`back-button-text ${textClassName}`}>
            {t(translationKeys.BACK)}
          </span>
        </div>
      </button>
    </div>
  );
};

export default BackButton;
