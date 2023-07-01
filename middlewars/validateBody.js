const validateBody = (schema) => {
  const func = (req, res, next) => {
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({ message: "Missing fields" });
    }
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      const errorFields = error.details.map((detail) => detail.context.key);
      return res.status(400).json({
        message: `Missing required fields: ${errorFields.join(", ")}`,
      });
    }
    next();
  };
  return func;
};

module.exports = {
  validateBody,
};
