import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header";
import Footer from "../../components/footer";
import SideDescription from "../../components/sideDescription";
import AgreementCard from "./agreementCard";
import { useSelector } from "react-redux";
import { getAgreementByIdSelector } from "../../store/state/agreements/selectors";
import { AgreementDocument } from "../../types";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../lang/translationKeys";
import BackButton from "../../components/backBtn";
import { fetchAgreementById } from "../../store/state/agreements";
import { useAppDispatch } from "../../store";
import "./styles.css";

type AgreementDetailsProps = {};

const AgreementDetails: React.FC<AgreementDetailsProps> = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      dispatch(fetchAgreementById(id));
    }
  }, [id, dispatch]);

  const agreement = useSelector(getAgreementByIdSelector(id));

  return (
    <div className="agreement-details-page">
      <Header className="header-image" showLogoutBtn />
      <div className="agreement-details-body-container">
        <div className="agreement-details-title-container">
          <BackButton />
          <h1>{t(translationKeys.AGREEMENT_DETAILS_HEADER)}</h1>
          <p>{t(translationKeys.AGREEMENT_DETAILS_TEXT)}</p>
        </div>
        <div className="agreement-details-content-wrapper">
          <div className="agreements-details-component">
            <AgreementCard agreement={agreement ?? ({} as AgreementDocument)} />
          </div>
          <div className="agreement-details-side-component">
            <SideDescription />
          </div>
        </div>
      </div>
      <Footer textClassName="agreement-details-custom-footer-text" />
    </div>
  );
};

export default AgreementDetails;
