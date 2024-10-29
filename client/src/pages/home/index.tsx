import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { translationKeys } from "../../lang/translationKeys";
import TitleSection from "./components/titleSections/titleSections";
import DocusignCard from "./components/docusignCard/docusignCard";
import Header from "../../components/header";
import Footer from "../../components/footer";
import "./styles.css";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleAuthCallback = () => {
    window.location.href = "http://localhost:8080/ds/authorize";
  };

  const handleLogin = (path: string) => {
    navigate(path);
  };

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
          btnTitle2={t(translationKeys.HOME_HEADER_CARD_BTN_TITLE2)}
          onClickBtn1={() => handleLogin("/agreements")}
          onClickBtn2={() => handleLogin("/agreements")}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
