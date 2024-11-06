const express = require('express');
const router = express.Router();
const {
  startAuth,
  callBackController,
  jwtAuth,
  getStatus,
  logOut
} = require('./controllers/auth')
const {getAgreementsController,getAgreementByIdController} = require('./controllers/agreements');
const authMiddleware = require('./middlewares/authMiddleware')

router.get('/code_grant_auth', startAuth);
router.get('/ds/callback', callBackController);
router.get('/ds/authorize',jwtAuth);
router.get('/get_status', getStatus);
router.post('/logout',logOut);

router.get('/api/agreements', getAgreementsController);
router.get('/api/agreements/:id', getAgreementByIdController);

module.exports = router;
