const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("userModel", {
        email: {
        type: Sequelize.STRING,
        primaryKey: true
      },
      password: {
        type: DataTypes.STRING
      },
      username: {
        type: DataTypes.STRING
      },
      mobileNumber: {
        type: DataTypes.STRING
      },
      active: {
        type: DataTypes.BOOLEAN
      },
      role: {
        type: DataTypes.STRING
      }
    });
  
    return User;
  };