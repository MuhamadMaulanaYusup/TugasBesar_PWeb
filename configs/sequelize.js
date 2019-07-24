const Sequelize = require('sequelize');

const sequelize = new Sequelize('kelompok7', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
