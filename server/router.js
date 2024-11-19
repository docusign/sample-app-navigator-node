const express = require("express");
const router = express.Router();
const {
  startAuth,
  callBackController,
  jwtAuth,
  getStatus,
  logOut,
} = require("./controllers/auth");
const {
  getAgreementsController,
  getAgreementByIdController,
} = require("./controllers/agreements");
const authMiddleware = require("./middlewares/authMiddleware");

router.get("/api/code_grant_auth", startAuth);
router.get("/api/ds/callback", callBackController);
router.get("/api/ds/authorize", jwtAuth);
router.get("/api/get_status", getStatus);
router.post("/api/logout", logOut);

router.get("/api/agreements", getAgreementsController);
router.get("/api/agreements/:id", getAgreementByIdController);

module.exports = router;
