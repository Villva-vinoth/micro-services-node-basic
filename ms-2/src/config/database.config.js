const { Sequelize } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize(
  `${process.env.DB_URL}`,
  {
    logging: false,
    dialect: "postgres",
    pool: {
      max: 100,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);



module.exports = { sequelize };
