const express = require('express');
const auth = require('../configs/auth');

const router = express.Router();

const paymentController = require('../controllers/payment');

router.post('/',auth.verifyToken ,paymentController.postPayment);

module.exports = router;