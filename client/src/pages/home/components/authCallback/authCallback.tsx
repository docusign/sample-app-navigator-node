import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const AuthCallback: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const authCode = urlParams.get("code");

    if (authCode) {
      axios.get<{ success: boolean; accessToken: string }>(`/ds/callback?code=${authCode}`)
        .then((response) => {
          if (response.data.success) {
            // Store the access token securely (local storage for this example)
            localStorage.setItem("accessToken", response.data.accessToken);
            alert("Logged in successfully!");
            navigate("/agreements"); // Redirect to the agreements page or another protected page
          } else {
            alert("Login failed. Please try again.");
            navigate("/");
          }
        })
        .catch((error) => {
          console.error("Error during callback:", error);
          alert("An error occurred during login.");
          navigate("/");
        });
    } else {
      alert("Authorization code not found.");
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h2>Processing login...</h2>
    </div>
  );
};

export default AuthCallback;
