import React from "react";
import { format } from "date-fns";
import { AgreementDocument } from "../../../types";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../../lang/translationKeys";
import { mapDocumentType } from "../../agreements/helper";
import "./styles.css";

type AgreementCardProps = {
  agreement: AgreementDocument;
};

const AgreementCard: React.FC<AgreementCardProps> = ({ agreement }) => {
  const { t } = useTranslation();

  const agreementType = mapDocumentType(agreement.type);
  const parties = agreement.parties
    ? agreement.parties.map((party) => party.name_in_agreement).join(", ")
    : "-";
  const effectiveDate = agreement.provisions?.effective_date
    ? format(new Date(agreement.provisions.effective_date), "yyyy/MM/dd")
    : "-";
  const expirationDate = agreement.provisions?.expiration_date
    ? format(new Date(agreement.provisions.expiration_date), "yyyy/MM/dd")
    : "-";

  return (
    <div className="agreement-details-card-container">
      <div className="agreement-details-card-main-section">
        <h2>{t(translationKeys.AGREEMENT_DETAILS_AGREEMENT)}</h2>
        <div className="agreement-details-card-type-section">
          <div className="agreement-details-item">
            <div className="agreement-details-label">
              {t(translationKeys.AGREEMENT_DETAILS_AGREEMENT_TYPE)}
            </div>
            <div className="agreement-details-value">{agreementType}</div>
          </div>
          <div className="agreement-details-item">
            <div className="agreement-details-label">
              {t(translationKeys.AGREEMENT_DETAILS_AGREEMENT_PARTY)}
            </div>
            <div className="agreement-details-value">{parties}</div>
          </div>
          <div className="agreement-details-item">
            <div className="agreement-details-label">
              {t(translationKeys.AGREEMENT_DETAILS_AGREEMENT_EFFECTIVE_DATE)}
            </div>
            <div className="agreement-details-value">{effectiveDate}</div>
          </div>
          <div className="agreement-details-item">
            <div className="agreement-details-label">
              {t(translationKeys.AGREEMENT_DETAILS_AGREEMENT_EXPIRATION_DATE)}
            </div>
            <div className="agreement-details-value">{expirationDate}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreementCard;
