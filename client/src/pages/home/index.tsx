import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../lang/translationKeys";
import TitleSection from "./components/titleSections/titleSections";
import DocusignCard from "./components/docusignCard/docusignCard";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { API_LINKS, ROUTE } from "../../constants";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import { loginWithJWTAction } from "../../store/state/auth";
import {
  getAccessTokenSelector,
  getIsAuthenticatedSelector,
} from "../../store/state/auth/selectors";
import "./styles.css";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  const isAuthenticated = useSelector(getIsAuthenticatedSelector);
  const accessToken = useSelector(getAccessTokenSelector);

  const handleAuthCallback = () => {
    window.location.href = API_LINKS.AUTHORIZE;
  };

  const handleJwtAuthFlow = () => {
    dispatch(loginWithJWTAction() as any);
  };

  useEffect(() => {
    const hasAccessToken = !!accessToken;
    if (isAuthenticated && hasAccessToken) {
      navigate(ROUTE.AGREEMENTS);
    }
  }, [isAuthenticated, accessToken, navigate]);

  return (
    <div className="home-page">
      <Header className="home-header" />
      <div className="home-container">
        <TitleSection
          title={t(translationKeys.HOME_HEADER_TITLE)}
          subTitle={t(translationKeys.HOME_HEADER_DESCRIPTION)}
          btnTitle={t(translationKeys.HOME_HEADER_BTN_TITLE)}
          primaryLink={{
            name: t(translationKeys.HOME_HEADER_BTN_TITLE),
            onClick: handleAuthCallback,
          }}
        />
        <DocusignCard
          title={t(translationKeys.HOME_HEADER_CARD_TITLE)}
          description={t(translationKeys.HOME_HEADER_CARD_SUBTITLE)}
          btnTitle1={t(translationKeys.HOME_HEADER_CARD_BTN_TITLE1)}
          onClickBtn1={handleJwtAuthFlow}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
