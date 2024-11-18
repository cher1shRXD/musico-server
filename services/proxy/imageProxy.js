const imageUrlProxy = async (req, res) => {
  const { url } = req.query;

  if (!url || !url.startsWith("http")) {
    return res.status(400).send("Invalid URL");
  }

  res.json({
    proxiedUrl: `${req.protocol}://${req.get(
      "host"
    )}/proxy-image?url=${encodeURIComponent(url)}`,
  });
}


module.exports = imageUrlProxy;