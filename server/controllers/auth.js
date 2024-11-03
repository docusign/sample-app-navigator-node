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
    const tokenInfo = await DsClient.exchangeCodeForToken(code);

    const { accessToken, refreshToken, expiresIn } = tokenInfo;

    config.docusignTokens = {
      accessToken,
      refreshToken,
      expiresIn,
    };

    res.redirect(
      `${config.client.port}/auth-callback?access_token=${accessToken}&refresh_token=${refreshToken}&expires_in=${expiresIn}`
    );
  } catch (error) {
    console.error('Callback error:', error);
    res.status(500).json({ message: "Login failed", error: error.message });
  }
};

module.exports = {
  startAuth,
  callBackController,
};
