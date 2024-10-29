import React from "react";
import { format } from "date-fns";
import { AgreementDocument, DocumentTypeModel } from "../../../types";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../../lang/translationKeys";
import { documentTypeMapping } from "../../agreements/helper";
import "./styles.css";

type AgreementCardProps = {
  agreement: AgreementDocument;
};

const AgreementCard: React.FC<AgreementCardProps> = ({ agreement }) => {
  const { t } = useTranslation();

  const agreementType =
    documentTypeMapping[agreement.data?.agreementType as DocumentTypeModel] ??
    "-";
  const party = agreement.data?.parties
    ? agreement.data.parties?.map((party: any) => party.name).join(", ") ?? "-"
    : "-";
  const contactValue = agreement.data?.envelope?.recipients
    ? agreement.data?.envelope?.recipients[0]?.email // TODO: What need to set here?
    : "-";
  const effectiveDate = agreement.data?.effectiveDate
    ? format(new Date(agreement.data.effectiveDate), "yyyy/MM/dd")
    : "-";
  const expirationDate = agreement.data?.expirationDate
    ? format(new Date(agreement.data.expirationDate), "yyyy/MM/dd")
    : "-";

  const renewalType = agreement.data?.renewal ?? "-"; // TODO: What need to set here?
  const renewalNoticePeriod = agreement.data?.terminationNoticePeriod ?? "-"; // TODO: What need to set here?
  const renewalNoticeDate = "2024/10/09"; // TODO: What need to set here?
  const renewalTerm = agreement.data?.paymentTerms ?? "1 year"; // TODO: What need to set here?
  const renewalOwner = "Andy Automator"; // TODO: What need to set here?
  const additionalInfo = 
    "After the user completes signing the envelope in the embedded signing session, the envelope is redirected to the second signer based on the conditions described in Step 2.";

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
            <div className="agreement-details-value">{party}</div>
          </div>
          <div className="agreement-details-item">
            <div className="agreement-details-label">
              {t(translationKeys.AGREEMENT_DETAILS_AGREEMENT_CONTRACT_VALUE)}
            </div>
            <div className="agreement-details-value">{contactValue}</div>
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

        <h2>{t(translationKeys.AGREEMENT_DETAILS_RENEWAL)}</h2>
        <div className="agreement-details-card-type-section">
          <div className="agreement-details-item">
            <div className="agreement-details-label">
              {t(translationKeys.AGREEMENT_DETAILS_RENEWAL_TYPE)}
            </div>
            <div className="agreement-details-value">{renewalType}</div>
          </div>
          <div className="agreement-details-item">
            <div className="agreement-details-label">
              {t(translationKeys.AGREEMENT_DETAILS_RENEWAL_NOTICE_PERIOD)}
            </div>
            <div className="agreement-details-value">{renewalNoticePeriod}</div>
          </div>
          <div className="agreement-details-item">
            <div className="agreement-details-label">
              {t(translationKeys.AGREEMENT_DETAILS_RENEWAL_NOTICE_DATE)}
            </div>
            <div className="agreement-details-value">{renewalNoticeDate}</div>
          </div>
          <div className="agreement-details-item">
            <div className="agreement-details-label">
              {t(translationKeys.AGREEMENT_DETAILS_RENEWAL_TERM)}
            </div>
            <div className="agreement-details-value">{renewalTerm}</div>
          </div>
          <div className="agreement-details-item">
            <div className="agreement-details-label">
              {t(translationKeys.AGREEMENT_DETAILS_RENEWAL_OWNER)}
            </div>
            <div className="agreement-details-value">{renewalOwner}</div>
          </div>
          <div className="agreement-details-item">
            <div className="agreement-details-label">
              {t(translationKeys.AGREEMENT_DETAILS_RENEWAL_ADDITIONAL_INFO)}
            </div>
            <div className="agreement-details-value">{additionalInfo}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgreementCard;
