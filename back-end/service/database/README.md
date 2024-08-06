# db.js

`db.js` contains code that uses `sequelize` and `sqlite` as the database driver. The code sets up the database and initialises the connection to the database. It fails if it fails to authenticate to connect to the generated database.

The database is then generated, if empty, at `./service/database/db.sqlite` starting from the `back-end` directory. If it exists already, the data from the `db.sqlite` will be used for logins or for generating new users.
