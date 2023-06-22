const validateBodyOnPatch = require("./validateBodyOnPatch");
const isValidId = require("./isValidId");
const { validateBody } = require("./validateBody");
const { validateBodyOnAuth } = require("./validateBodyOnAuth");
const authenticate = require("./authenticate");
module.exports = {
  validateBody,
  isValidId,
  validateBodyOnPatch,
  validateBodyOnAuth,
  authenticate,
};
