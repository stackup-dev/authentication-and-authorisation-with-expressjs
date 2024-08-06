# helper.js

Since we are dealing with cookies, we can only access them from req.signedCookies. The `helper.js` contains the function that takes in the request object received from the client. If the client “req” object does not contain the cookie, our server will crash as the key is not defined. Using the question marks allows our code to break out of the chain of keys, preventing the server from crashing.

The function also allows us to extract the user ID from the decrypted cookie received from the client once the request is processed.
