const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("sqlite::memory:", {
  dialect: "sqlite",
  storage: "./service/database/db.sqlite",
  logging: false,
});

sequelize
  .authenticate()
  .then(async () => {
    await sequelize.sync({ alter: true }).then(() => {
      console.log("Database synchronized");
    });
    console.log("Connection has been established successfully");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = {
  sequelize,
};
