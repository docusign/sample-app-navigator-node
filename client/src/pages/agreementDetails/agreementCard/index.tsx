import React from "react";
import { format } from "date-fns";
import { AgreementDocument } from "../../../types";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../../lang/translationKeys";
import { mapDocumentType } from "../../agreements/helper";
import "./styles.css";
import { useAppDispatch } from "../../../store";
import { fetchAgreementById } from "../../../store/state/agreements";

type AgreementCardProps = {
  agreement: AgreementDocument;
};

const AgreementCard: React.FC<AgreementCardProps> = ({ agreement }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

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

  const renewalType = agreement?.provisions?.assignment_type ?? "-";
  const renewalNoticePeriod = agreement?.provisions?.execution_date ?? "-";
  const renewalNoticeDate = agreement?.provisions?.execution_date ?? '-';
  const renewalTerm = agreement?.provisions?.execution_date ?? "1 year";
  const renewalOwner = agreement?.parties?.[0]?.name_in_agreement ?? '-';
  const additionalInfo =
    "After the user completes signing the envelope in the embedded signing session, the envelope is redirected to the second signer based on the conditions described in Step 2.";

  const handleRefresh = () => {
    dispatch(fetchAgreementById(agreement.id) as any)
  }

  return (
    <div className="agreement-details-card-container">
      <div className="agreement-details-card-main-section">
        <div className="agreement-details-card-main-section-header">
          <div className="agreement-details-card-main-section-header-item">
            <h2>{t(translationKeys.AGREEMENT_DETAILS_AGREEMENT)}</h2>
          </div>
          <div className="agreement-details-card-main-section-header-item">
            <button className="tableButton" onClick={handleRefresh}>
              {t(translationKeys.AGREEMENT_DETAILS_AGREEMENT_REFRESH)}
            </button>
          </div>
        </div>
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
