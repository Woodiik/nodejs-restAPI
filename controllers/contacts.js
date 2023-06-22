const { Contact } = require("../models/contact");
const { ctrlWrapper } = require("../helpers");

const listContacts = async (_, res) => {
  const result = await Contact.find();
  res.json(result);
};
const getById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findById(contactId);
  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }
  res.json(result);
};

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  return res.status(201).json(result);
};

const deleteContact = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove(contactId);
  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.json({ message: "contact deleted" });
};

const updateContact = async (req, res) => {
  const { params, body } = req;
  const result = await Contact.findByIdAndUpdate(params.contactId, body, {
    new: true,
  });
  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json(result);
};
const updateStatusContact = async (req, res) => {
  const { params, body } = req;
  const result = await Contact.findByIdAndUpdate(params.contactId, body, {
    new: true,
  });
  if (!result) {
    return res.status(404).json({ message: "Not found" });
  }
  return res.status(200).json(result);
};

module.exports = {
  listContacts: ctrlWrapper(listContacts),
  updateContact: ctrlWrapper(updateContact),
  deleteContact: ctrlWrapper(deleteContact),
  addContact: ctrlWrapper(addContact),
  updateStatusContact: ctrlWrapper(updateStatusContact),
  getById: ctrlWrapper(getById),
};
