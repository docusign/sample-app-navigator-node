import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "../../../../constants";
import Loader from "../../../../components/loader/loader";
import { useAppDispatch } from "../../../../store";
import { setIsAuthenticated } from "../../../../store/state/auth";

const AuthCallback = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const accessToken = urlParams.get("access_token");
    const refreshToken = urlParams.get("refresh_token");
    const expiresIn = urlParams.get("expires_in");

    if (accessToken) {
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken as any);
      localStorage.setItem("expiresIn", expiresIn as any);
      dispatch(setIsAuthenticated() as any);
      navigate(ROUTE.AGREEMENTS);
    } else {
      const storedAccessToken = localStorage.getItem("accessToken");

      if (!storedAccessToken) {
        navigate(ROUTE.ROOT);
      }
    }
  }, [navigate, dispatch]);

  return <Loader />;
};

export default AuthCallback;
