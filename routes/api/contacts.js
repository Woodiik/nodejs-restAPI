const express = require("express");
const {
  addContact,
  deleteContact,
  getById,
  listContacts,
  updateContact,
  updateStatusContact,
} = require("../../controllers/contacts");
const { validateBody, isValidId } = require("../../middlewars");
const { schemas } = require("../../models/contact");
const router = express.Router();

router.get("/", listContacts);

router.get("/:contactId", isValidId, getById);

router.post("/", validateBody(schemas.addSchema), addContact);

router.delete("/:contactId", isValidId, deleteContact);

router.put(
  "/:contactId",
  isValidId,
  validateBody(schemas.addSchema),
  updateContact
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  validateBody(schemas.updateFavoriteSchema),
  updateStatusContact
);

module.exports = router;
