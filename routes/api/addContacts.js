const contacts = require("../../models/contacts");
const { addSchema } = require("./schema");

const addContact = async (req, res, next) => {
  const { body } = req;
  const result = await contacts.addContact(body);
  const { error } = addSchema.validate(body, { abortEarly: false });
  if (!error) {
    return res.status(201).json(result);
  }
  const errorFields = error.details.map((detail) => detail.context.key);
  res
    .status(400)
    .json({ message: `Missing required fields: ${errorFields.join(", ")}` });
};

module.exports = {
  addContact,
};
