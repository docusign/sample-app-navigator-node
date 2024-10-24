const docusignService = require('../services/docusignService');

const callBackController = async (req, res) => {
  const code = req.query.code;
  console.log('req.query.client_id',req.query.client_id)
  console.log('response',res)
  if (!code) {
    return res.status(400).send('Authorization code not found');
  }

  console.log('code in callBackController',code)

  try {
    res.status(200).json({
       success: true,
       message: 'Logged in successfully', 
       accessToken: code 
      });
  } catch (error) {
    console.error('Error in /ds/callback:', error);
    res.status(500).json({ message: 'Login failed', error });
  }
};


module.exports = {
  callBackController,
};
