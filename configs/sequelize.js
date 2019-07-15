const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_js', 'root', '', {
	host: 'localhost',
	dialect: 'mysql',
});

module.exports = sequelize;