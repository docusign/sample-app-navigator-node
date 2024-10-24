const axios = require('axios');
const jwt = require('jsonwebtoken');

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ message: 'No valid access token found. Please log in.' });
    }

    let currentToken = authHeader.split(' ')[1];
    console.log(' currentToken from FE', currentToken);

    const decodedTokenPayload = jwt.decode(currentToken);
    console.log('decodedTokenPayload',decodedTokenPayload)
    
    if (!decodedTokenPayload || !decodedTokenPayload.UserId) {
      return res.status(401).json({ message: 'Invalid token payload' });
    }

    const userInfoUrl = 'https://account-d.docusign.com/oauth/userinfo';

    try {
      const response = await axios.get(userInfoUrl, {
        headers: {
          'Authorization': `Bearer ${currentToken}`
        }
      });

      const fetchedUser = response.data;
      const fetchedUserId = fetchedUser.sub;
      const tokenUserId = decodedTokenPayload.UserId;

      console.log('fetchedUserId:', fetchedUserId);
      console.log('tokenUserId:', tokenUserId);

      if (tokenUserId !== fetchedUserId) {
        console.error('User ID mismatch. Session user ID does not match fetched user ID.');
        return res.status(401).json({ message: 'User validation failed. Please log in again.' });
      }

      console.log('User verified successfully:');
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
