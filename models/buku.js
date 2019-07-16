const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Buku extends Sequelize.Model {}

Buku.init({
  judul: Sequelize.STRING,
  id_kategori: Sequelize.STRING,
  penerbit: Sequelize.STRING,
  jumlah: Sequelize.INTEGER,
  harga: Sequelize.STRING

}, { sequelize, modelName: 'buku' });

module.exports = Buku;