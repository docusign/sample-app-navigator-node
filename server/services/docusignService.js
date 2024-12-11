const axios = require("axios");
const urlJoin = require("url-join");
const config = require("../config/config");
const DsClient = require("../config/dsClient");

const getAgreements = async (req) => {
  const accessToken = req.headers['authorization'].split(' ')[1];

  const userInfo = await DsClient.getUserInfo(accessToken);
  const defaultAccount = userInfo.accounts.find(account => account.isDefault === 'true');
  const accountId = defaultAccount ? defaultAccount.accountId : null;

  try {
    if (!accessToken) {
      throw new Error("Access token is missing. Please log in again.");
    }

    const url = urlJoin(config.docusign.agreementsUrl, accountId, 'agreements');
    const response = await axios.get(url, {
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

  const userInfo = await DsClient.getUserInfo(accessToken);
  const defaultAccount = userInfo.accounts.find(account => account.isDefault === 'true');
  const accountId = defaultAccount ? defaultAccount.accountId : null;

  try {
    if (!accessToken) {
      throw new Error("Access token is missing. Please log in again.");
    }

    const url = urlJoin(config.docusign.agreementsUrl, accountId, 'agreements', agreementId);
    const response = await axios.get(url,
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
