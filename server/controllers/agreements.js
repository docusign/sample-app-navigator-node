const docusignService = require('../services/docusignService');

const getAgreementsController = async (req, res) => {
  try {
    const agreements = await docusignService.getAgreements(req);
    res.status(200).json({ success: true, data: agreements });
  } catch (error) {
    console.error('Error fetching agreements:', error);
    res.status(500).json({ success: false, message: 'Error fetching in controller agreements' });
  }
};

const getAgreementByIdController = async (req, res) => {
  try {
    const agreementId = req.params.id;
    const agreement = await docusignService.getAgreementById(req,agreementId);
    res.status(200).json({ success: true, data: agreement });
  } catch (error) {
    console.error(`Error fetching agreement with ID ${req.params.id}:`, error);
    res.status(500).json({ success: false, message: 'Error fetching agreement' });
  }
};

module.exports = {
  getAgreementsController,
  getAgreementByIdController,
};
