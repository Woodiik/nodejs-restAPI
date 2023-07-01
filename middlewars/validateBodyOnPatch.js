const validateBodyOnPatch = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "Missing field favorite" });
  }

  if (
    Object.keys(req.body).length !== 1 ||
    !req.body.hasOwnProperty("favorite")
  ) {
    return res.status(400).json({ message: "Invalid request body" });
  }

  if (typeof req.body.favorite !== "boolean") {
    return res
      .status(400)
      .json({ message: "Favorite must be a boolean value" });
  }

  next();
};

module.exports = validateBodyOnPatch;
