import { useState, useMemo } from "react";
import minus from "../../assets/img/minus.svg";
import plus from "../../assets/img/plus.svg";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../lang/translationKeys";
import "./styles.css";
import { LINKS } from "../../constants";

const SideDescription = () => {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const expandedContent = useMemo(
    () => (
      <div className="description-content">
        <h3>{t(translationKeys.SIDE_HEADER2)}</h3>
        <ul>
          <li>{t(translationKeys.SIDE_HEADER2_LI1)}</li>
          <li>{t(translationKeys.SIDE_HEADER2_LI2)}</li>
          <li>{t(translationKeys.SIDE_HEADER2_LI3)}</li>
          <li>{t(translationKeys.SIDE_HEADER2_LI4)}</li>
        </ul>
        <h3>{t(translationKeys.SIDE_HEADER3)}</h3>
        <p>
          {t(translationKeys.SIDE_PARAGRAPH1_BEFORE_LINK)}{" "}
          <a
            className="description-link"
            href={LINKS.ACC_BRANDS_CREATE}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(translationKeys.SIDE_LINK_ACCOUNT_BRANDS_CREATE)}
          </a>{" "}
          {t(translationKeys.SIDE_PARAGRAPH1_AFTER_LINK)}
        </p>
        <h3>{t(translationKeys.SIDE_HEADER4)}</h3>
        <p>
          {t(translationKeys.SIDE_PARAGRAPH2_BEFORE_LINK)}{" "}
          <a
            className="description-link"
            href={LINKS.ACC_BRANDS_LIST}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(translationKeys.SIDE_LINK_ACCOUNT_BRANDS_LIST)}
          </a>{" "}
          {t(translationKeys.SIDE_PARAGRAPH2_AFTER_LINK)}{" "}
          <a
            className="description-link"
            href={LINKS.ACC_BRANDS_CREATE}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(translationKeys.SIDE_LINK_ACCOUNT_BRANDS_CREATE)}
          </a>{" "}
          {t(translationKeys.SIDE_PARAGRAPH2_END)}
        </p>
        <p>{t(translationKeys.SIDE_PARAGRAPH3)}</p> <br />
        <p>{t(translationKeys.SIDE_PARAGRAPH4)}</p>
      </div>
    ),
    [t]
  );

  return (
    <div className="docusign-description-content">
      <div className="docusign-description-wrap">
        <div className="header-container">
          <h3>{t(translationKeys.SIDE_HEADER)}</h3>
          <button
            onClick={toggleExpand}
            aria-expanded={isExpanded}
            aria-controls="description-content"
            className="expand-toggle"
          >
            <img src={isExpanded ? minus : plus} alt="expand" />
          </button>
        </div>
        {isExpanded && expandedContent}
      </div>
    </div>
  );
};

export default SideDescription;
