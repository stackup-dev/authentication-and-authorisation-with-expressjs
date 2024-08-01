# Backend

This directory contains the necessary parts of running the authentication algorithm for the frontend.

## How to run

Create a new file called `.env` at root of the `back-end` directory. Copy and paste the following contents from the code
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