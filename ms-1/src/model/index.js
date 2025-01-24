const {sequelize} = require("../config/database.config");
const initialize = async () => {
  try {
    await sequelize.sync();
    console.log("Connection with postgres successfully !");
  } catch (error) {
    console.log("Error connecting to postgres with Sequelize ! ", error);
  }
};

module.exports = { initialize };
