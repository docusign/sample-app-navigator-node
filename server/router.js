const express = require('express');
const router = express.Router();
const config = require('./config/config');
 const authMiddleware = require('./middlewares/authMiddleware');
const { getAgreementsController,getAgreementByIdController } = require('./controllers/agreements');
const {callBackController} = require('./controllers/auth');


router.get('/api/agreements',authMiddleware, getAgreementsController);
router.get('/api/agreements/:id',authMiddleware, getAgreementByIdController);
router.get('/ds/callback',callBackController);
router.get('/healthcheck', (req, res) => {
  res.send('Welcome to the DocuSign Navigator API sample app');
});

router.get('/ds/authorize', (req, res) => {
  const clientId = req.query.clientId || config.docusign.clientId;
  const redirectUri = req.query.redirectUri || config.docusign.redirectUri;

  const oauthUrl = `${config.docusign.baseURL}/oauth/auth?response_type=code&scope=adm_store_unified_repo_read&client_id=${clientId}&redirect_uri=${redirectUri}&state=random_state_string`;

  res.redirect(oauthUrl);
});


module.exports = router;
