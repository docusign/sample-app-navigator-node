import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { translationKeys } from "../../lang/translationKeys";
import TitleSection from "./components/titleSections/titleSections";
import DocusignCard from "./components/docusignCard/docusignCard";
import Header from "../../components/header";
import Footer from "../../components/footer";
import { API_LINKS, ROUTE } from "../../constants";
import axios from "axios";
import "./styles.css";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleAuthCallback = () => {
    window.location.href = API_LINKS.AUTHORIZE;
  };

  async function loginWithJwt() {
    try {
      const response = await axios.get(
        `${API_LINKS.AUTHORIZE_TEST_1}/ds/authorize`,
        {
          withCredentials: true, // Ensures cookies are sent with the request
        }
      );

      const data = response.data as any;

      if (data.accessToken) {
        // Store tokens in localStorage
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("expiresIn", data.expiresIn);

        console.log("JWT login successful, tokens stored in localStorage.");
        navigate(ROUTE.AGREEMENTS);
      } else {
        console.error("JWT login failed:", data.message);
      }
    } catch (error) {
      console.error("Error logging in with JWT:", error);
    }
  }

  const handleTestAccount1AuthCallback = async () => {
    loginWithJwt();
  };

  const handleTestAccount2AuthCallback = () => {
    // window.location.href = API_LINKS.AUTHORIZE_TEST_2;
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
          onClickBtn1={handleTestAccount1AuthCallback}
          onClickBtn2={handleTestAccount2AuthCallback}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
