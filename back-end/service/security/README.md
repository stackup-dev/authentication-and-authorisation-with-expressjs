# authentication.js

This directory contains the file `authentication.js`. It contains a
function `tokenVerification` that verifies the session token (jwt)
from the logged in user for authentication. If the decoded JWT
fails to authenticate, it will return an error "Failed to authenticate
token." with an error status of 401. If a token is not provided, then
it will error that a "Token is not provided" with status 403.
