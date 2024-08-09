const express = require("express");
const router = express.Router(); //change handler to this router
const authentication = require("../service/security/authentication");

//DB Files
const authController = require("../controllers/authController");

//Route
router.post("/login", (req, res) => authController.login(req, res));
router.post("/logout", (req, res) => authController.logout(req, res));
router.post("/register", (req, res) => authController.register(req, res));

router.get("/user", authentication, (req, res) =>
	authController.load_user_profile(req, res),
);
router.put("/user", authentication, (req, res) =>
	authController.update_user_profile(req, res),
);

module.exports = router;
