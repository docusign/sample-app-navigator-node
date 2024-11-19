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
        <p>
          {t(translationKeys.SIDE_HEADER2_LI1)}
        </p>
        <h3>{t(translationKeys.SIDE_HEADER3)}</h3>
        <p>
          <a
            className="description-link"
            href={LINKS.ACC_BRANDS_LIST}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(translationKeys.SIDE_LINK_GET_AGREEMENTS_LIST)}
          </a>{" "}
        </p>
        <h3>{t(translationKeys.SIDE_HEADER4)}</h3>
        <p>
          {t(translationKeys.SIDE_PARAGRAPH1_BEFORE_LINK)}{" "}
          <a
            className="description-link"
            href={LINKS.ACC_BRANDS_LIST}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(translationKeys.SIDE_LINK_GET_AGREEMENTS_LIST)}
          </a>{" "}
          {t(translationKeys.SIDE_PARAGRAPH1_AFTER_LINK)}{" "}
        </p>
        <p>
          {t(translationKeys.SIDE_PARAGRAPH2_BEFORE_LINK)}{" "}
          <a
            className="description-link"
            href={LINKS.ACC_BRANDS_CREATE}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(translationKeys.SIDE_LINK_AGREEMENTS_RESPONSE)}
          </a>{" "}
          {t(translationKeys.SIDE_PARAGRAPH2_AFTER_LINK)}{" "}
        </p>
        <p>
          {t(translationKeys.SIDE_PARAGRAPH3_BEFORE_LINK)}{" "}
          <a
            className="description-link"
            href={LINKS.USE_CASES}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t(translationKeys.SIDE_LINK_USE_CASES)}
          </a>{" "}
          {t(translationKeys.SIDE_PARAGRAPH3_AFTER_LINK)}{" "}
        </p>
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
