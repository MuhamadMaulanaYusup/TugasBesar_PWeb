const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Product extends Sequelize.Model {}

Product.init({
  name: Sequelize.STRING,
  price: Sequelize.STRING
  
}, { sequelize, modelName: 'product' });

module.exports = Product;