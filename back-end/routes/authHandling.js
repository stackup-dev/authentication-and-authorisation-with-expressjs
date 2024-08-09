const express = require("express");
const router = express.Router();

const authorisation = require("../service/security/authorisation");

const authController = require("../controllers/authController.js");

// Routes
router.post('/grant/admin', (req, res) => authController.grant_admin(req, res));
router.post('/grant/user', (req, res) => authController.grant_user(req, res));
router.get('/load/admin', authorisation("admin"), (req, res) => authController.load_admin(req, res));
router.get('/load/user', authorisation("user"), (req, res) => authController.load_user(req, res));
router.post('/logout', authorisation("user"), (req, res) => authController.logout(req, res));

module.exports = router;