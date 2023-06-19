const contacts = require("../models/contacts");
const { ctrlWrapper } = require("../helpers/ctrlWrappers");

const listContacts = async (_, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};
const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.getContactById(contactId);
  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const result = await contacts.addContact(req.body);

  return res.status(201).json(result);
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.json({ message: "contact deleted" });
};

const updateContact = async (req, res) => {
  const { params, body } = req;
  const result = await contacts.updateContact(params.contactId, body);
  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json(result);
};

module.exports = {
  updateContact: ctrlWrapper(updateContact),
  deleteContact: ctrlWrapper(deleteContact),
  addContact: ctrlWrapper(addContact),
  listContacts: ctrlWrapper(listContacts),
  getById: ctrlWrapper(getById),
};
