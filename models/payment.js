const Sequelize = require('sequelize');

const sequelize = require('../configs/sequelize');

class Payment extends Sequelize.Model {}

Payment.init({
  transfer_bank: {
    type: Sequelize.ENUM,
    values: ['BCA', 'BRI','BNI', 'MANDIRI', 'DANAMON', 'CIMB']
  },
  bukti_transfer: Sequelize.TEXT
}, { sequelize, modelName: 'payment' });

module.exports = Payment;