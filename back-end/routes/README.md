# authHandling.js

With the code, we will allow the user to register a new account, login,
logout of their existing account, fetch their profile and update their profile.

Line 3 imports the authentication algorithm that we wrote in step 8. We apply
the authentication middleware in lines 13 and 14. This means that before
the request reaches the authController file, the request will be put through
the authentication algorithm. If the token signature is valid, the request
will be able to reach the controller file. Those two routes are the routes
that we would like to secure with a login wall. With this, only users that
have logged into the system can request the server for these resources.

For lines 9 to 11, those are for creating an account, logging into the system
and logging out of the system. Typically, those activities are made available
to anyone without an account. As such, no authentication is necessary.

