const express = require('express');
const router = express.Router();
 const authMiddleware = require('./middlewares/authMiddleware');
const { getAgreementsController,getAgreementByIdController } = require('./controllers/agreements');
const {callBackController} = require('./controllers/auth');


router.get('/agreements',authMiddleware, getAgreementsController);
router.get('/agreements/:id',authMiddleware, getAgreementByIdController);
router.get('/ds/callback',callBackController);
router.get('/healthcheck', (req, res) => {
  res.send('Welcome to the DocuSign Navigator API sample app');
});


module.exports = router;
