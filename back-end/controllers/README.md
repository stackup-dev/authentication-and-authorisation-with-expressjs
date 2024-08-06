# authController.js

The `authController.js` file is in the controller directory. This is where
the data is processed when the user is redirected after submitting their
credentials in the login modal or registration modal.

The `authController.js` file also cleans up the login
data after logging out.

For already logged in (or more accurately, authenticated) users, the
`authController.js` file allows user operations such as

- loading their user profile; and 
- updating their user profile

## An Expanded Explanation

From lines 1 to 4, we import the necessary modules. UserModel is the ORM
model for user data, jwt is the JSON Web Token library, bcrypt is used for
password hashing, and get_user_id is a helper function to extract user IDs
from JWT tokens. We have created the helper function in 7.

From lines 6 to 41, we define the login function logic. This function handles
user login requests. It starts by extracting the username and password from
the request body. If either is missing, it responds with a 400 status and an
error message (line 9). It then queries the database to find a user with the
given username (line 13). If no user is found, it responds with an error
(lines 15 to 17). If a user is found, it compares the provided password
with the stored hashed password using bcrypt (line 20). If the passwords do
not match, it responds with an error (lines 22-24). If the passwords match,
it creates a JWT token using the jsonwebtoken package with the user's ID and
username (lines 27 to 32). This is how we generate the code signature to be
verified by the “authentication” middleware that we wrote earlier. From
line 36, we define a range of cookie settings we used before sending to
the client. This is how we managed to provision the cookie. It then sets
a signed, HTTP-only cookie containing the token and user information, and
responds with a success message.

From lines 52 to line 63, we define a logout function which clears the
user cookie to log the user out. It then responds with a success message
(line 57). If there is an error, it catches and logs it, responding with a
server error message (line 61). A common misconception is that logging out
only changes the pages on the screen. In fact, this is false as the action
of logging out removes all the information pertaining to the user from the
web browser, thus preventing another individual from accessing the user's
account on the same device.

Next, we create the registration function from lines 65 to line 97. This
function handles user registration requests. It starts by extracting username,
password, email, and contact_number from the request body (line 67). If
any are missing, it responds with an error. It then checks if a user with
the given username already exists. If the user exists, it responds with
an error (lines 75 to 77). If not, it hashes the password using bcrypt. It
then creates a new user in the database with the provided information and
the hashed password (lines 84 to 89). It responds with a success message.

Next, we create a function which will load the user’s profile. This
function retrieves the profile of the currently logged-in user. It starts
by getting the user ID from the JWT token using the helper function that we
imported. If the user ID is not found, it responds with an error. It then
queries the database for the user with the given ID, excluding the password
and salt fields. If the user is not found, it responds with an error. If the
user is found, it responds with the user's profile information. If there is
an error, it catches and logs it, responding with a server error message.

Last but not the least, we create a function that allows the user to
update their information on their profile. This function updates the profile
information of the currently logged-in user. It starts by getting the user ID
from the JWT token using the helper function. If the user ID is not found,
it responds with an error. It then queries the database for the user with
the given ID. If the user is not found, it responds with an error. If the
user is found, it updates the user's username, email, and contact_number if
they are provided in the request body. It saves the updated user information
to the database, and responds with a success message. If there is an error,
it catches and logs it, responding with a server error message.
