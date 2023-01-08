const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const cors = require('cors');

app.use(cors({
  origin: ['http://ec2-44-203-188-65.compute-1.amazonaws.com','http://44.203.188.65']
}));

app.disable("x-powered-by");

//Sequelize
const database = require("./models");
database.sequelize.sync()
  .then(() => {
    console.log("Database Synced successfully");
  })
  .catch((err) => {
    console.log("Failed to sync database: " + err.message);
  });

//Routes
app.use('/', require('./routes/RouteController'));

app.listen(PORT,console.log("server running port => " + PORT));
