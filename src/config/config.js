require('dotenv').config();
const path = require('path');

// console.log('DS_PRIVATE_KEY_PATH:', process.env.DS_PRIVATE_KEY_PATH);

// const resolvedPath = path.join(__dirname, process.env.DS_PRIVATE_KEY_PATH.replace('./config', '.'));
// console.log('Resolved private key path:', resolvedPath);


module.exports = {
  port: process.env.PORT,
  docusign: {
    clientId: process.env.DS_CLIENT_ID, 
    clientSecret: process.env.DS_CLIENT_SECRET,
    userId: process.env.DS_IMPERSONATED_USER_ID, 
    accountId: process.env.DS_ACCOUNT_ID,
    authServer: process.env.DS_AUTH_SERVER,
    privateKeyPath: process.env.DS_PRIVATE_KEY_PATH,
    redirectUri: process.env.DS_REDIRECT_URI,
    tokenUrl:  process.env.TOKEN_URL,
    agreementsUrl:`https://s1.us.services.demo.docusign.net/devx-iam/v1/accounts/6aed3a52-a5db-42ae-9b1c-e89988167cfd/agreements/`
  },
  server: {
    port: process.env.PORT || 3001,
    sessionSecret: process.env.SESSION_SECRET || 'default-secret'
  },
  scopes: ['signature',
        'adm_store_unified_repo_read',
         'adm_store_unified_repo_write',
         'agreement_object_model_read',
         'models_read',
         'models_write',
          'ais_analyze',
          'apr_read',
         'apr_write']
};
