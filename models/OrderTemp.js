const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const OrderTemp = sequelize.define("orderTempModel", {
        orderId: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
      },
      userId: {
        type: DataTypes.STRING
      },
      ProductName: {
        type: DataTypes.STRING
      },
      quantity: {
        type: DataTypes.INTEGER
      },
      totalPrice: {
        type: DataTypes.STRING
      },
      Status: {
        type: DataTypes.STRING
      },
      price: {
          type: DataTypes.STRING
      }
    });
  
    return OrderTemp;
  };