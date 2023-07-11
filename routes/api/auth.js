const express = require("express");
const {
  register,
  login,
  getCurrent,
  logout,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
} = require("../../controllers/auth");
const {
  validateBodyOnAuth,
  authenticate,
  upload,
} = require("../../middlewars");
const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", validateBodyOnAuth(schemas.registerSchema), register);
module.exports = router;

router.get("/verify/:verificationToken", verifyEmail);

router.post(
  "/verify",
  validateBodyOnAuth(schemas.emailSchema),
  resendVerifyEmail
);

router.post("/login", validateBodyOnAuth(schemas.registerSchema), login);
module.exports = router;

router.get("/current", authenticate, getCurrent);

router.post("/logout", authenticate, logout);

router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar);
