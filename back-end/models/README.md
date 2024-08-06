# UserModel.js

The `UserModel.js` file contains code that describes the Database Schema
to interact with the models for our database.

There are **8 entities** declared in the Database Schema

1. `id`
2. `username`
3. `contact_number`
4. `email`
5. `password`
6. `salt`
7. `createdAt`
8. `updatedAt`

For now, just know that the most important entities that secures an account are
`salt` and `password`. The former is the additional input to hash a data such as
a password or a passphrase. Salting helps defend against brute-force and dictionary attacks.

More info about Salt in their website <https://docs.saltproject.io/en/latest/topics/about_salt_project.html#about-salt>.
