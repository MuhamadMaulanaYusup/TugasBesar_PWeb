const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Buku extends Sequelize.Model {}

Buku.init({
  judul: Sequelize.STRING,
  penerbit: Sequelize.STRING,
  jumlah: Sequelize.INTEGER,
  harga: Sequelize.STRING,
  kategoriId: Sequelize.INTEGER

}, { sequelize, modelName: 'buku' });

module.exports = Buku;