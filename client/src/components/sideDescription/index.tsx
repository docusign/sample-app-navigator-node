import { useState, useMemo } from "react";
import minus from "../../assets/img/minus.svg";
import plus from "../../assets/img/plus.svg";
import { useTranslation } from "react-i18next";
import "./styles.css";
import { translationKeys } from "../../lang/translationKeys";

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
          See the<strong> AccountBrands:create </strong>and envelope source
          code.
        </p>
        <h3>{t(translationKeys.SIDE_HEADER4)}</h3>
        <p>
          After the form is submitted, call the
          <strong> AccountBrands:list </strong>method on the account to check if
          the brand you want to create already exists. If it does, find the
          corresponding brand ID. If not, call the
          <strong> AccountBrands:create </strong>
          method to create a new brand.
        </p>
        <p>The brand ID is then stored for the next step. </p> <br></br>
        <p>
          After the user completes signing the envelope in the embedded signing
          session, the envelope is redirected to the second signer based on the
          conditions described in Step 2. After the user completes signing the
          envelope in the
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
