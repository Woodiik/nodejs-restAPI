const express = require("express");
const contacts = require("../../models/contacts");
const Joi = require("joi");

const router = express.Router();

const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});
router.get("/", async (req, res, next) => {
  const result = await contacts.listContacts();
  res.json(result);
});

router.get("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    res.status(404).json({ message: "Not found" });
  }
  res.json(result);
});

router.post("/", async (req, res, next) => {
  const { body } = req;
  const result = await contacts.addContact(body);
  const { error } = addSchema.validate(body);
  if (!error) {
    return res.status(201).json(result);
  }
  res.status(400).json({ message: "missing required name field" });
});

router.delete("/:contactId", async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    res.status(404).json({ message: "Not found" });
  }
  res.json({ message: "contact deleted" });
});

router.put("/:contactId", async (req, res, next) => {
  const { params, body } = req;
  const result = await contacts.updateContact(params.contactId, body);
  const { error } = addSchema.validate(body);
  if (!error) {
    return res.status(200).json(result);
  }
  res.status(400).json({ message: "missing fields" });
});

module.exports = router;
