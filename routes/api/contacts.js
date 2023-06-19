const express = require("express");
const {
  addContact,
  deleteContact,
  getById,
  listContacts,
  updateContact,
} = require("../../controllers/contacts");
const { validateBody } = require("../../middlewars");
const { addSchema } = require("../../schemas/contacts");
const router = express.Router();

router.get("/", listContacts);

router.get("/:contactId", getById);

router.post("/", validateBody(addSchema), addContact);

router.delete("/:contactId", deleteContact);

router.put("/:contactId", validateBody(addSchema), updateContact);

module.exports = router;
