const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Delivery extends Sequelize.Model {}

Delivery.init({
  alamat: Sequelize.TEXT,
  provinsi: Sequelize.STRING,
  kota_kabupaten: Sequelize.STRING,
  kecamatan: Sequelize.STRING,
  kode_pos: Sequelize.INTEGER,
  alamat_lengkap: Sequelize.TEXT,
  nama_penerima: Sequelize.STRING,
  nomor_telepon: Sequelize.TEXT,
  catatan: Sequelize.TEXT,
  kurir: {
    type: Sequelize.ENUM,
    values: ['JNE', 'TIKI', 'J&T', 'GO SEND', 'POS INDONESIA']
  }
}, { sequelize, modelName: 'delivery' });

module.exports = Delivery;