const express = require("express");
const { addContact } = require("./addContacts");
const { deleteContact } = require("./deleteContact");
const { getById } = require("./getById");
const { listContacts } = require("./listContacts");
const { updateContact } = require("./updateContact");

const router = express.Router();

router.get("/", listContacts);

router.get("/:contactId", getById);

router.post("/", addContact);

router.delete("/:contactId", deleteContact);

router.put("/:contactId", updateContact);

module.exports = router;
