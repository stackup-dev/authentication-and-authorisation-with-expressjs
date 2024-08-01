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
snippet

```js
TOKEN_KEY="StackUpAuthenticationProject123!"
PORT=4001
```

Next, open a new terminal and head to the root of the `back-end` directory. Finally, run the following command

```bash
node app.js
```

This will run an instance of the back-end. This should run in the background (i.e. in another terminal) while
the frontend is live.