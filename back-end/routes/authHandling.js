const express = require("express");
const router = express.Router();

const authorisation = require("../service/security/authorisation.js");

const authController = require("../controllers/authController.js");

// Routes
router.post("/grant/admin", (req, res) => authController.grant_admin(req, res));
router.post("/grant/user", (req, res) => authController.grant_user(req, res));
router.get("/load/admin", authorisation({ isAdmin: true }), (req, res) =>
	authController.load_admin(req, res),
);
router.get("/load/user", authorisation({ isAdmin: false }), (req, res) =>
	authController.load_user(req, res),
);
router.post("/logout", authorisation({ isAdmin: false }), (req, res) =>
	authController.logout(req, res),
);

module.exports = router;
