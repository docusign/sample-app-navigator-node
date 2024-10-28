import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store"; // Adjust the import path based on your store setup
import { fetchAgreements } from "../../store/state/agreements";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../lang/translationKeys";
import SideDescription from "../../components/sideDescription";
import AgreementsTable from "./agreementsTable";

import "./styles.css";

type AgreementsProps = {};

const Agreements: React.FC<AgreementsProps> = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  
  const { agreements, loading, error } = useSelector(
    (state: RootState) => state.agreements
  );

  useEffect(() => {
    dispatch(fetchAgreements() as any);
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="agreement-page">
      <Header showLogoutBtn />
      <div className="agreement-body-container">
        <div className="title-container">
          <h1>{t(translationKeys.AGREEMENT_HEADER)}</h1>
          <p>{t(translationKeys.AGREEMENT_TEXT)}</p>
        </div>
        <div className="content-wrapper">
          <div className="agreements-component">
            <AgreementsTable data={agreements} />
          </div>
          <div className="side-component">
            <SideDescription />
          </div>
        </div>
      </div>
      <Footer textClassName="custom-footer-text" />
    </div>
  );
};

export default Agreements;
