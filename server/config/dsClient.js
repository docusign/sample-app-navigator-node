const docusign = require('docusign-esign');
const config = require('../config/config');

class DsClient {
  constructor() {
    this.apiClient = new docusign.ApiClient();
    this.apiClient.setBasePath(config.docusign.baseURL);
    this.apiClient.setOAuthBasePath(config.docusign.oauthBasePath);
  }

  getAuthorizationUrl() {
    const url = this.apiClient.getAuthorizationUri(
      config.docusign.clientId,
      config.docusign.redirectUri,
      'code',
      config.scopes,
      'random_state_string'
    );
    return url;
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

  getAuthorizedClient(accessToken) {
    this.apiClient.addDefaultHeader('Authorization', `Bearer ${accessToken}`);
    return this.apiClient;
  }
}

module.exports = new DsClient();
