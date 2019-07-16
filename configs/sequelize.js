const Sequelize = require('sequelize');

const sequelize = new Sequelize('mysql://root:@localhost:3306/node_js');

module.exports = sequelize;