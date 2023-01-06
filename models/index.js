const dbConfig = require("../DBConfig/Database");
const { DataTypes } = require("sequelize");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: 0,
});

const database = {};

database.Sequelize = Sequelize;
database.sequelize = sequelize;

database.user = require("./UserModel.js")(sequelize, Sequelize);
database.cart = require("./CartModel.js")(sequelize, Sequelize);
database.product = require("./ProductModel.js")(sequelize, Sequelize);
database.carttemp = require("./CartTempModel.js")(sequelize, Sequelize);
database.ordertemp = require("./OrderTemp.js")(sequelize, Sequelize);
database.order = require("./OrderModel.js")(sequelize, Sequelize);

database.cart.hasOne(database.user);
database.user.belongsTo(database.cart);

module.exports = database;