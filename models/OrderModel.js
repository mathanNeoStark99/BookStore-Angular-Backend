const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orderModel", {
        orderId: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
      },
      dateTime: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.STRING
      }
    });

    return Order;
  };