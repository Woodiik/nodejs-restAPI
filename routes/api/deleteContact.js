const contacts = require("../../models/contacts");
const deleteContact = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await contacts.removeContact(contactId);
  if (!result) {
    res.status(404).json({ message: "Not found" });
  }
  res.json({ message: "contact deleted" });
};

module.exports = {
  deleteContact,
};
