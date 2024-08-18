# authorisation.js

This code contains the core part of authorisation and access control. It uses
the "waterfall" approach of authorisation where there is a level higher or
lower for each limited amount of access control. The most important part of
the code is not about the `isAdmin` parameter from the authorisation function
but the `convertRole` function.

```js

const convertToRole = (role) => {
	switch (role) {
		case false:
			return 1;
		case true:
			return 2;
		default:
			return 0;
	}
};
```

For example, if the user has `isAdmin` set to `true` and the routing code from
`authHandling.js` has set the `isAdmin` parameter `true` when calling the
function `authorisation` from `authorisation.js` e.g. calling `load_admin`
from `authController.js` does this, then this `convertRole` function from above
will be used for setting the level of access control the user has so they can
- load the admin page
- load the user page

If user's `isAdmin` is set to false, they cannot access the admin page but only
the user page.

For more questions, you can try asking in our [Discord
server](https://discord.com/channels/895564164783808523/1060491074109456454).

