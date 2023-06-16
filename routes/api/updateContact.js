const contacts = require("../../models/contacts");
const { addSchema } = require("./schema");

const updateContact = async (req, res, next) => {
  const { params, body } = req;
  if (Object.keys(body).length === 0) {
    return res.status(400).json({ message: "Missing fields" });
  }
  const result = await contacts.updateContact(params.contactId, body);
  const { error } = addSchema.validate(body, { abortEarly: false });

  if (!error) {
    return res.status(200).json(result);
  }
  const errorFields = error.details.map((detail) => detail.context.key);
  res
    .status(400)
    .json({ message: `Missing required fields: ${errorFields.join(", ")}` });
};

module.exports = {
  updateContact,
};
