const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Transaction extends Sequelize.Model {}

Transaction.init({
  status: {
    type: Sequelize.ENUM,
    values: ['Menunggu Konfirmasi Pembayaran', 'Pesanan Diproses', 'Pesanan Dikirim', 'Pesanan Tiba', 'Pesanan Selesai']
  }
}, { sequelize, modelName: 'transaction' });

module.exports = Transaction;