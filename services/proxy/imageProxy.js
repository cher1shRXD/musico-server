const axios = require("axios");

const imageProxy = async (req, res) => {
  try {
    const response = await axios.get(req.query.url, { responseType: 'arraybuffer' });
    res.set('Access-Control-Allow-Origin', '*');
    res.contentType(response.headers['content-type']);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Failed to fetch the image');
  }
}

module.exports = imageProxy;