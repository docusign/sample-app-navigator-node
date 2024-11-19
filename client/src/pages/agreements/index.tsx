import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store";
import { fetchAgreements } from "../../store/state/agreements";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../lang/translationKeys";
import SideDescription from "../../components/sideDescription";
import AgreementsTable from "./agreementsTable";
import "./styles.css";
import {
  getAgreementsSelector,
  isAgreementsLoadingSelector,
} from "../../store/state/agreements/selectors";
import Loader from "../../components/loader/loader";

type AgreementsProps = {};

const Agreements: React.FC<AgreementsProps> = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();

  const agreements = useSelector(getAgreementsSelector);
  const isAgreementsLoading = useSelector(isAgreementsLoadingSelector);

  useEffect(() => {
    dispatch(fetchAgreements() as any);
  }, [dispatch]);

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
            {isAgreementsLoading ? (
              <div className="loader-container">
              <Loader />
              </div>
            ) : (
              <AgreementsTable data={agreements} />
            )}
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
