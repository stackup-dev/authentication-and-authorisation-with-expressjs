# Backend

This directory contains the necessary parts of running the authentication algorithm for the frontend.

## Installing dependencies

Run the following commands at the root of the `back-end` directory.

```
npm install
```

This will install the dependencies declared by the `package.json` and `package-lock.json`.

## How to run

> [!IMPORTANT]
> Make sure you have installed the dependencies by following the instructions from the [Installing dependencies](#installing-dependencies) section.

Next, create a new file called `.env` at the root of the `back-end` directory. Copy and paste the following contents from the code
snippet.

```js
TOKEN_KEY = "StackUpAuthenticationProject123!";
PORT = 4001;
```

The contents of the file are called **Environmental Variables**. Node by default uses environmental variables from the development environment but sometimes manually adding this in the terminal can be
tedious so it is better to use a file that can be read from somewhere during program execution, hence, the `dotenv` dependency was used to read from this file called `.env`.

> [!IMPORTANT]
> Always make sure that whenever you have sensitive information such as keys and personal access tokens, `.env` files should not be tracked by Git's source control by adding it to the file called `.gitignore`.

Next, open a new terminal and head to the root of the `back-end` directory. Finally, run the following command

```bash
node app.js
```

This will run an instance of the back-end. This should run in the background (i.e. in another terminal) while
the frontend is live at http://localhost:4001.

> [!NOTE]
> If you are using GitHub Codespaces, Gitpod or similar, those URLs might be redirected in VSCode Web (or VSCode desktop). You should check the **Ports** tab of your editor. Your URL
> http://localhost:4001 might be redirected to something like http://orange-marmalade.github.codespace.dev (not a real link). If it is set to private while running, please set it to
> Public by right-clicking the row of where the redirected URL is.

### About the environmental variables

The purpose of the environmental variables `TOKEN_KEY` and `PORT` are

1. The `TOKEN_KEY` is a string that is used to create a cookie signature. It is like a password for your platform. In the code above, the Token Key is in a readable format. However, you can also use a gibberish string with no meaning as your token key.
2. We defined our `PORT` number as 4001. Port numbers can be any number within the range of 1 to 65535. Only one application can use a specific port at any point in time. As long as the port is free, your NodeJS application can use it and listen for incoming requests. However, there are some restrictions and conventions you will need to adhere to. To name a few, ports 80 and 443 are reserved for HTTP requests, port 22 is for Secure Sockets Layer (SSL) connections and port 21 is for File Transfer Protocol (FTP).To learn more about the various port reservations, you may read more about it [here](https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml).

## Dependencies

- bcryptjs
- body-parser
- cookie-parser
- cors
- dotenv
- express
- jsonwebtoken
- morgan
- sequelize
- sqlite3

These dependencies are used for the backend. We will only be describing the relevant ones.

### Express

Express or ExpressJS, is a minimal Javascript web framework designed to be used as a "better" framework around Node.
It contains a set of utilities for quick and fast development such as authentication and logging.

### DotEnv

DotEnv is a package that allows to create custom environmental variables in files that start with `.env`. This allows storing private keys and tokens as environmental variables, thereby,
allowing use of environmental variables in a contained environment rather than littering them anywhere e.g. in the `$HOME` directory.

> [!WARNING]
> Private keys and tokens should be carefully hidden away from public. Make sure to add them to your `.gitignore` to avoid third-party access.

### Sqlite3 and Sequelize

[Sequelize](https://sequelize.org/docs/) is the ORM used to communicate with your database driver e.g. mariadb and sqlite3. It is used to initialise and perform database CRUD transactions easily
abstracted away as Javascript or Typescript code. Sqlite3 is used as the database of choice for this simple project to store and manage account registration and logins.

The ORM will take in the defined parameters from our code and convert it into an SQL query. Regular SQL queries are susceptible to SQL injections, giving hackers access to the data within the platform. The ORM will essentially act as the middleman to prevent the users from entering raw SQL queries.

### JSONWebToken

JSON Web Tokens (JWTs) are a standardized way to securely send data between two parties. The JS/TS library is an implementation of this web encryption standard. This is used to encrypt passwords and session tokens for authenticated users.

### BcryptJS

This dependency encrypts the password of the account, it is the JavaScript implementation of the Bcrypt hashing algorithm, allowing you to use the hash encryption without having to meddle with complex hashing functions.
