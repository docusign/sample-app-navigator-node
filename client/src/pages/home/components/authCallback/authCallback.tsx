import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../constants";
import Loader from "../../../../components/loader/loader";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const accessToken = urlParams.get("access_token");
    const refreshToken = urlParams.get("refresh_token");
    const expiresIn = urlParams.get("expires_in");

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken as any);
      localStorage.setItem("expiresIn", expiresIn as any);
      navigate(ROUTE.AGREEMENTS);
    } else {
      const storedAccessToken = localStorage.getItem("accessToken");

      if (!storedAccessToken) {
        navigate(ROUTE.ROOT);
      }
    }
  }, [navigate]);

  return <Loader />;
};

export default AuthCallback;
