const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");
// Define a model
const User = sequelize.define("User", {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});
// Synchronize the model with the database
// This function will delete all existing tables in the database
const syncDatabase = async () => {
  await sequelize.sync();
  console.log("Database synchronized.");
};
// remember to comment this after server runs ones.
syncDatabase();
module.exports = User;
