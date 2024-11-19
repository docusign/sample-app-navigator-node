import { useTranslation } from "react-i18next";
import { translationKeys } from "../../lang/translationKeys";
import "./styles.css";

type FooterProps = {
  className?: string;
  containerClassName?: string;
  textClassName?: string;
};

const Footer = ({
  className = "",
  containerClassName = "",
  textClassName = "",
}: FooterProps) => {
  const { t } = useTranslation();

  return (
    <footer className={`footer ${className}`}>
      <div className={`footer-container ${containerClassName}`}>
        <span className={`copyright ${textClassName}`}>
          {t(translationKeys.FOOTER_TITLE)}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
