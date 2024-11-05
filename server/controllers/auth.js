const DsClient = require('../config/dsClient');
const config = require('../config/config');


const startAuth = (req, res) => {
  const authorizationUrl = DsClient.getAuthorizationUrl();

  res.redirect(authorizationUrl);
};

const callBackController = async (req, res) => {
  const code = req.query.code;
  if (!code) {
    return res.status(400).send("Authorization code not found in the request.");
  }

  try {
    const authData = await DsClient.exchangeCodeForToken(code);

    req.session.accessToken = authData.accessToken;
    req.session.refreshToken = authData.refreshToken;
    req.session.expiresIn = authData.expiresIn;
    req.session.authType = 'Code Grant';

    req.session.save((err) => {
      if (err) {
        console.error("Error saving session:", err);
        return res.status(500).json({ message: "Session save failed" });
      }
      res.redirect(
        `${config.client.port}/auth-callback?access_token=${authData.accessToken}&refresh_token=${authData.refreshToken}&expires_in=${authData.expiresIn}`
      );
    });
  } catch (error) {
    console.error('Callback error:', error);
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};


const jwtAuth = async (req, res) => {
  try {
    const authData = await DsClient.updateToken();

    req.session.accessToken = authData.accessToken;
    req.session.expiresIn = authData.expiresIn;
    req.session.authType = 'JWT';

    res.json({ message: 'Logged in with JWT' });
  } catch (error) {
    console.error('JWT authorization error:', error);
    res.status(500).json({ message: 'JWT authorization failed' });
  }
};

const getStatus = (req, res) => {
  const isTokenValid = req.session.expiresIn && (Date.now() < req.session.expiresIn * 1000);
  res.json({
    logged: isTokenValid,
    authType: req.session.authType || null,
  });
};

const logOut = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
      return res.status(500).json({ message: 'Logout failed' });
    }
    res.json({ message: 'Logged out' });
  });
};

module.exports = {
  startAuth,
  callBackController,
  jwtAuth,
  getStatus,
  logOut,
};
