const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Book extends Sequelize.Model {}

Book.init({
  isbn: Sequelize.STRING,
  judul: Sequelize.STRING,
  pengarang: Sequelize.STRING,
  penerbit: Sequelize.STRING,
  stok: Sequelize.INTEGER,
  harga: Sequelize.INTEGER,
  deskripsi: Sequelize.TEXT,
  kategori: Sequelize.STRING,
  jumlah_halaman: Sequelize.INTEGER,
  tanggal_terbit: Sequelize.DATEONLY,
  bahasa: Sequelize.STRING,
  berat: Sequelize.INTEGER,
  lebar: Sequelize.INTEGER,
  panjang: Sequelize.INTEGER
}, { sequelize, modelName: 'book' });

module.exports = Book;