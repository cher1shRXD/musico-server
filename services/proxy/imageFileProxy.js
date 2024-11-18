export const imageFileProxy = async (req, res) => {
  const { url } = req.query;

  if (!url) {
    return res.status(400).send("No URL provided");
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch image");
    }

    res.set("Access-Control-Allow-Origin", "*");
    res.contentType(response.headers.get("content-type"));
    response.body.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send("Failed to fetch image");
  }
}

module.exports = imageFileProxy;