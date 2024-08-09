const jwt = require("jsonwebtoken");

const grant_admin = async (req, res) => {
	try {
		const payload = {
			account_type: "member",
			isAdmin: true,
		};

		const token = jwt.sign(payload, process.env.TOKEN_KEY, {
			expiresIn: "24h",
		});

		res.cookie(
			"user",
			{
				account_type: "member",
				isAdmin: true,
				token: token,
			},
			{
				httpOnly: true,
				signed: true,
				secure: true,
				sameSite: "None",
				maxAge: 60 * 60 * 24 * 1000,
			},
		);

		return res.status(200).send({
			status: 200,
			message: "Admin granted successfully",
		});
	} catch (error) {
		return res.status(500).send({
			status: 500,
			message: "Internal Server Error",
		});
	}
};

const grant_user = async (req, res) => {
	try {
		const payload = {
			account_type: "member",
			isAdmin: false,
		};

		const token = jwt.sign(payload, process.env.TOKEN_KEY, {
			expiresIn: "24h",
		});

		res.cookie(
			"user",
			{
				account_type: "member",
				isAdmin: false,
				token: token,
			},
			{
				httpOnly: true,
				signed: true,
				secure: true,
				sameSite: "None",
				maxAge: 60 * 60 * 24 * 1000,
			},
		);

		return res.status(200).send({
			status: 200,
			message: "User granted successfully",
		});
	} catch (error) {
		return res.status(500).send({
			status: 500,
			message: "Internal Server Error",
		});
	}
};

const load_admin = async (req, res) => {
	try {
		return res.status(200).send({
			status: 200,
			message: "Admin loaded successfully",
		});
	} catch (error) {
		return res.status(500).send({
			status: 500,
			message: "Internal Server Error",
		});
	}
};

const load_user = async (req, res) => {
	try {
		return res.status(200).send({
			status: 200,
			message: "User loaded successfully",
		});
	} catch (error) {
		return res.status(500).send({
			status: 500,
			message: "Internal Server Error",
		});
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

module.exports = {
	grant_admin,
	grant_user,
	load_admin,
	load_user,
	logout,
};
