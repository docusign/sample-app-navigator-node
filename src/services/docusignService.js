require('dotenv').config();
const axios = require('axios');
const mockData = require('../mockData');
const docusign = require('docusign-esign');
const config = require('../config/config');

const dsApi = new docusign.ApiClient();
dsApi.setOAuthBasePath(config.docusign.authServer);

let cachedAccessToken = null;
let tokenExpiryTime = null;


const getCachedToken = () => {
  console.log('Checking cached access token...');
  if (cachedAccessToken && new Date() < tokenExpiryTime) {
    console.log('Returning cached access token');
    return cachedAccessToken;
  }
  console.log('No valid cached access token found');
  return null;
};


const setAccessToken = async (authCode) => {
  const tokenEndpoint = `${config.docusign.authServer}/oauth/token`;

  console.log('Getting new access token...');
  console.log('Token endpoint URL:', tokenEndpoint);
  console.log('Client ID:', config.docusign.clientId);
  console.log('Redirect URI:', config.docusign.redirectUri);

  const clientId = config.docusign.clientId;
  const clientSecret = config.docusign.clientSecret;
  const redirectUri = config.docusign.redirectUri;

  try {
    console.log('Sending request to obtain access token...');
    const response = await axios.post(
      tokenEndpoint,
      new URLSearchParams({
        grant_type: 'authorization_code',
        code: authCode,
        redirect_uri: redirectUri,
        client_id: clientId,
        client_secret: clientSecret,
      }).toString(),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
    );

    console.log('Received response from token endpoint:', response.data);

    const { access_token, expires_in } = response.data;
    cachedAccessToken = access_token;
    tokenExpiryTime = new Date(new Date().getTime() + expires_in * 1000);
    console.log('Access token obtained successfully:', access_token);
    console.log('Token expires in:', expires_in, 'seconds');
    return cachedAccessToken;
  } catch (error) {
    console.error('Error obtaining access token:', error.response ? error.response.data : error.message);
    throw new Error('Failed to obtain access token');
  }
};

const getAgreements = async () => {
  try {
    console.log('Fetching all agreements from mock data...');
    return mockData.agreementDocuments;
  } catch (error) {
    console.error('Error fetching agreements from mock data:', error.message);
    throw error;
  }
};

const getAgreementById = async (agreementId) => {
  try {
    console.log(`Fetching agreement with ID: ${agreementId} from mock data...`);
    const agreement = mockData.agreementDocuments.find((doc) => doc.id === agreementId);
    if (!agreement) {
      console.error(`Agreement with ID ${agreementId} not found`);
      throw new Error(`Agreement with ID ${agreementId} not found`);
    }
    console.log(`Agreement with ID: ${agreementId} found`);
    return agreement;
  } catch (error) {
    console.error(`Error fetching agreement ${agreementId} from mock data:`, error.message);
    throw error;
  }
};

module.exports = {
  getAgreementById,
  getAgreements,
  getCachedToken,
  setAccessToken,
};
