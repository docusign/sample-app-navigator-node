const config = require('../config/config');
const axios = require('axios');


module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No valid access token found. Please log in.' });
    }

    const currentToken = authHeader.split(' ')[1];
    console.log('Current Token from FE:', currentToken);

    const userInfoUrl = 'https://account-d.docusign.com/oauth/userinfo';

    try {
      const response = await axios.get(userInfoUrl, {
        headers: {
          'Authorization': `Bearer ${currentToken}`
        }
      });

      const fetchedUserId = response.data.sub;
      console.log('Fetched User ID:', fetchedUserId);


      const expectedUserId = config.docusign.userId;
      console.log('Expected User ID:', expectedUserId);

      if (fetchedUserId !== expectedUserId) {
        console.error('User ID mismatch. Access denied.');
        return res.status(403).json({ message: 'User validation failed. Access denied.' });
      }

      console.log('User validated successfully.');
      next();

    } catch (error) {
      console.error('User info verification failed:', error.message);
      return res.status(401).json({ message: 'User info validation failed. Please log in.' });
    }

  } catch (error) {
    console.error('Error in authentication middleware:', error.message);
    res.status(401).json({ message: 'Authentication failed' });
  }
};
