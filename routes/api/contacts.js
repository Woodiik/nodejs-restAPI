const express = require("express");

const {
  addContact,
  deleteContact,
  getById,
  listContacts,
  updateContact,
  updateStatusContact,
} = require("../../controllers/contacts");
const {
  validateBody,
  isValidId,
  validateBodyOnPatch,
  authenticate,
} = require("../../middlewars");
const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", authenticate, listContacts);

router.get("/:contactId", authenticate, isValidId, getById);

router.post("/", authenticate, validateBody(schemas.addSchema), addContact);

router.delete("/:contactId", authenticate, isValidId, deleteContact);

router.put(
  "/:contactId",
  authenticate,
  isValidId,
  validateBody(schemas.addSchema),
  updateContact
);

router.patch(
  "/:contactId/favorite",
  authenticate,
  isValidId,
  validateBodyOnPatch,
  updateStatusContact
);

module.exports = router;
