require('dotenv').config();
const mockData = require('../mockData');
const docusign = require('docusign-esign');
const config = require('../config/config');

const dsApi = new docusign.ApiClient();
dsApi.setOAuthBasePath(config.docusign.authServer);

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
};
