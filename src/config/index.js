const dbConfig = require("./db.config.js");

const { Sequelize, DataTypes } = require("sequelize");



const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool,
  logging: 0,
  operatorsAliases: 0,
});
sequelize.query('CREATE DATABASE IF NOT EXISTS `nodesql`;', { raw: true, type: Sequelize.QueryTypes.CREATE_DATABASE }).then(() => {}).catch(err => {})
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

 sequelize.sync({ force: false }).then(() => {
  console.log("Database & tables created!");
}).then(() => {}).catch(err => {});

module.exports = sequelize;
