const UserModel = require("../models/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { get_user_id } = require("../utils/helper");

const login = async (req, res) => {
	try {
		const { username, password } = req.body;
		if (!username || !password) {
			return res.status(400).json({ message: "Invalid Request" });
		}

		// Check if user exists
		const user = await UserModel.findOne({ where: { username: username } });

		if (!user) {
			return res.status(400).json({ message: "Invalid Credentials" });
		}

		// Check if password is correct
		const isMatch = await bcrypt.compare(password, user.password);

		if (!isMatch) {
			return res.status(400).json({ message: "Invalid Credentials" });
		}

		// Create JWT token
		const payload = {
			user: {
				id: user.id,
				username: user.username,
			},
		};

		const token = jwt.sign(payload, process.env.TOKEN_KEY, {
			expiresIn: "24h",
		});

		res.cookie(
			"user",
			{
				id: user.id,
				username: user.username,
				token: token,
			},
			{
				httpOnly: true,
				signed: true,
				secure: false,
				maxAge: 60 * 60 * 24 * 1000,
			},
		);
		return res.status(200).json({
			ok: true,
			message: "Login Successful",
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Server Error" });
	}
};

const logout = async (req, res) => {
	try {
		res.clearCookie("user");
		return res.status(200).json({
			ok: true,
			message: "Logout Successful",
		});
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Server Error" });
	}
};

const register = async (req, res) => {
	try {
		let { username, password, email, contact_number } = req.body;
		if (!username || !password || !email || !contact_number) {
			return res.status(400).json({ message: "Invalid Request" });
		}

		// Check if user already exists
		let user = await UserModel.findOne({ where: { username: username } });

		if (user) {
			return res.status(400).json({ message: "User already exists" });
		}

		// Password Hashing
		const salt = await bcrypt.genSalt(10);
		password = await bcrypt.hash(password, salt);

		// Create new user
		user = await UserModel.create({
			username: username,
			password: password,
			email: email,
			contact_number: contact_number,
			salt: salt,
		});

		return res.status(200).json({ message: "User Created", ok: true });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Server Error" });
	}
};

const load_user_profile = async (req, res) => {
	try {
		const user_id = await get_user_id(req); // Get user id from JWT token by the helper function

		if (!user_id) {
			return res.status(400).json({ message: "Invalid Request" });
		}

		const user = await UserModel.findOne({
			where: {
				id: user_id,
			},
			attributes: { exclude: ["password", "salt"] },
		}).then((user) => user.dataValues);

		if (!user) {
			return res.status(400).json({ message: "User not found" });
		}

		return res.status(200).json({ user: user, ok: true });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Server Error" });
	}
};

const update_user_profile = async (req, res) => {
	try {
		const user_id = await get_user_id(req); // Get user id from JWT token by the helper function

		if (!user_id) {
			return res.status(400).json({ message: "Invalid Request" });
		}

		const user = await UserModel.findOne({ where: { id: user_id } });

		if (!user) {
			return res.status(400).json({ message: "User not found" });
		}

		const { username, email, contact_number } = req.body;

		if (username) {
			user.username = username;
		}

		if (email) {
			user.email = email;
		}

		if (contact_number) {
			user.contact_number = contact_number;
		}

		await user.save();

		return res.status(200).json({ message: "User Updated", ok: true });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ message: "Server Error" });
	}
};

module.exports = {
	login,
	logout,
	register,
	load_user_profile,
	update_user_profile,
};
