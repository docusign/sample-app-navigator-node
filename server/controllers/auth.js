const axios = require('axios');
const config = require('../config/config');

const callBackController = async (req, res) => {
  const code = req.query.code;
  const state = req.query.state;

  console.log('callBackController', code, state);

  if (!code) {
    return res.status(400).send('Authorization code not found in the request.');
  }

  try {
    const credentials = Buffer.from(`${config.docusign.clientId}:${config.docusign.clientSecret}`).toString('base64');
    const requestData = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: config.docusign.redirectUri,
    }).toString();

    const tokenResponse = await axios.post(
      'https://account-d.docusign.com/oauth/token',
      requestData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${credentials}`,
        },
      }
    );

    const { access_token, refresh_token, expires_in } = tokenResponse.data;

    if (!access_token) {
      return res.status(500).json({ message: 'Access token not received from DocuSign.' });
    }

    res.redirect(`http://localhost:3000/auth-callback?access_token=${access_token}&refresh_token=${refresh_token}&expires_in=${expires_in}`);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Login failed',
      error: error.message,
      ...(error.response && { statusCode: error.response.status, errorData: error.response.data }),
    });
  }
};

module.exports = { callBackController };
