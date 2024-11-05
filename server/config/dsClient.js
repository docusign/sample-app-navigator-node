const docusign = require('docusign-esign-node-client');
const fs = require('fs');
const path = require('path');
const config = require('../config/config');

class DsClient {
  constructor() {
    this.apiClient = new docusign.ApiClient();
    this.apiClient.setBasePath(config.docusign.baseURL);
    this.apiClient.setOAuthBasePath(config.docusign.oauthBasePath);
  }

  getAuthorizationUrl() {
    try {
      const url = this.apiClient.getAuthorizationUri(
        config.docusign.clientId,
        config.scopes,
        config.docusign.redirectUri,
        config.responseType,
        config.state
      );
  
      return url;
    } catch (error) {
      console.error('Failed to generate authorization URL:', error.message || error);
      throw new Error('Authorization URL generation failed. Please check the configuration and try again.');
    }
  }
  

  async exchangeCodeForToken(code) {
    try {
      const tokenInfo = await this.apiClient.generateAccessToken(
        config.docusign.clientId,
        config.docusign.clientSecret,
        code
      );
      return tokenInfo;
    } catch (error) {
      console.error('Error details:', error.response ? error.response.data : error.message);
      throw new Error(`Token exchange failed: ${error.message}`);
    }
  }

  async updateToken() {
    try {
      const rsaKey = fs.readFileSync(path.join(__dirname, '../config/private.key'));
      const jwtResponse = await this.apiClient.requestJWTUserToken(
        config.docusign.clientId,
        config.docusign.impersonatedUserId,
        config.scopes,
        rsaKey,
        3600
      );

      const accessToken = jwtResponse.body.access_token;
      const expiresIn = jwtResponse.body.expires_in;

      return { accessToken, expiresIn };
    } catch (error) {
      console.error('JWT updateToken error:', error.response ? error.response.data : error.message);
      throw new Error(`JWT update failed: ${error.message}`);
    }
  }

  getAuthorizedClient(accessToken) {
    this.apiClient.addDefaultHeader('Authorization', `Bearer ${accessToken}`);
    return this.apiClient;
  }
}


module.exports = new DsClient();
