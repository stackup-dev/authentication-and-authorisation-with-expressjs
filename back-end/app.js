const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT | 4001;

app.use(morgan("tiny"));

const corsOptions = {
	origin: true,
	credentials: true, //included credentials as true
	preflightContinue: true,
};
app.use(cors(corsOptions));

app.use(cookieParser(process.env.TOKEN_KEY));

const jsonParser = bodyParser.json();
app.use(
	bodyParser.urlencoded({
		extended: true,
	}),
);
app.use(bodyParser.json());

app.use((req, res, next) => {
	res.header(
		"Access-Control-Allow-Methods",
		"GET, POST, OPTIONS, PUT, PATCH, DELETE",
	);
	res.header(
		"Access-Control-Allow-Headers",
		"X-Requested-With,content-type,Content-Type, Authorization,Authentication,withCredentials, Content-Length, X-Requested-With, Accept, x-access-token,credentials, Origin, X-Content-Type-Options",
	);
	res.header(
		"Access-Control-Expose-Headers",
		"x-access-token, Authorization, Authentication, withCredentials, credentials, Set-Cookie",
	);
	res.header("Access-Control-Allow-Credentials", true);
	next();
});

// App Routes
app.use("/auth", require("./routes/authHandling"));

const server = app.listen(PORT, () => {
	console.info(`Server is running on port ${PORT}`);
});
