const { DataTypes } = require("sequelize");
const database = require(".")
const CartTemp = database.carttemp;

module.exports = (sequelize, Sequelize) => {
    const CartTemp = sequelize.define("cartTempModel", {
      cartItemId: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
      },
      userId: {
        type: DataTypes.STRING
      },
      productName: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.STRING
      },
      quantity: {
        type: DataTypes.INTEGER
      }
    });
    return CartTemp;
  };