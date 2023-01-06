const { DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("productModel", {
        productId: {
            type: Sequelize.UUID,
            primaryKey: true,
            defaultValue: Sequelize.UUIDV4
      },
      imageUrl: {
        type: DataTypes.STRING
      },
      productName: {
        type: DataTypes.STRING
      },
      price: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      quantity: {
        type: DataTypes.INTEGER
      }
    });
  
    return Product;
  };