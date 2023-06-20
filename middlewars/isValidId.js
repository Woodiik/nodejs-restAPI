const { isValidObjectId } = require("mongoose");
const isValidId = (req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    return res.status(400).json({ message: "Missing field favorite" });
  }
  const { contactId } = req.params;
  if (!isValidObjectId(contactId)) {
    return next(
      res.status(400).json({ message: `${contactId} is not valid id` })
    );
  }
  next();
};
module.exports = isValidId;
