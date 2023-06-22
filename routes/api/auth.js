const express = require("express");
const {
  register,
  login,
  getCurrent,
  logout,
} = require("../../controllers/auth");
const { validateBodyOnAuth, authenticate } = require("../../middlewars");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBodyOnAuth(schemas.registerSchema), register);
module.exports = router;

router.post("/login", validateBodyOnAuth(schemas.registerSchema), login);
module.exports = router;

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);
