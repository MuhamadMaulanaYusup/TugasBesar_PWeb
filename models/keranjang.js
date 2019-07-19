const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Keranjang extends Sequelize.Model {}

Keranjang.init({
  jumlah: Sequelize.INTEGER,
  bukuId: Sequelize.INTEGER,
  userId: Sequelize.INTEGER
  
}, { sequelize, modelName: 'keranjang' });

module.exports = Keranjang;