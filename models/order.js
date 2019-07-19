const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Order extends Sequelize.Model {}

Order.init({
  jumlah: Sequelize.INTEGER,
  subtotal: Sequelize.INTEGER,
  biaya_kirim: Sequelize.INTEGER,
  total: Sequelize.INTEGER
}, { sequelize, modelName: 'order' });

module.exports = Order;