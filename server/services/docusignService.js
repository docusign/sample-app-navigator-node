const axios = require("axios");
const config = require("../config/config");

const getAgreements = async (req) => {
  const accessToken = req.headers['authorization'].split(' ')[1];

  try {
    if (!accessToken) {
      throw new Error("Access token is missing. Please log in again.");
    }

    const response = await axios.get(`${config.docusign.agreementsUrl}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (response.data) {
      return response.data.data;
    } else {
      throw new Error("No agreements found");
    }
  } catch (error) {
    console.error("Error fetching agreements from DocuSign:", error.message);
    throw error;
  }
};

const getAgreementById = async (req, agreementId) => {
  const accessToken = req.headers['authorization'].split(' ')[1];

  try {
    if (!accessToken) {
      throw new Error("Access token is missing. Please log in again.");
    }

    const response = await axios.get(
      `${config.docusign.agreementsUrl}/${agreementId}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    if (response.data) {
      return response.data;
    } else {
      throw new Error(`Agreement with ID ${agreementId} not found`);
    }
  } catch (error) {
    console.error(
      `Error fetching agreement ${agreementId} from DocuSign:`,
      error.message
    );
    throw error;
  }
};

module.exports = {
  getAgreementById,
  getAgreements,
};
