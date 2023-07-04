const validateBodyOnPatch = require("./validateBodyOnPatch");
const isValidId = require("./isValidId");
const { validateBody } = require("./validateBody");
const { validateBodyOnAuth } = require("./validateBodyOnAuth");
const authenticate = require("./authenticate");
const upload = require("./upload");
module.exports = {
  validateBody,
  isValidId,
  validateBodyOnPatch,
  validateBodyOnAuth,
  authenticate,
  upload,
};
