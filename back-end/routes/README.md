# authHandling.js

This code contains routing/router code or "routes" using ExpressJS
Router. These are URL endpoints, specifically, assigned paths for the client
frontend to communicate to. These paths have assigned their own method of
requests such as GET or POST.

Each of these paths also calls the functions from `authController.js`
located at `controllers` directory for data to be processed received from the
client frontend. Some of these paths also call `authorisation.js` located
at `service/security/` directory. For example, `load_admin` will only be called if
`authorisation` function from `authorisation.js` returns a value that
allows access by checking the session cookie if it contains the fieldname
that gives user admin access, specifically, `isAdmin` fieldname of the user.

For more questions, you can try asking in our [Discord
server](https://discord.com/channels/895564164783808523/1060491074109456454).
