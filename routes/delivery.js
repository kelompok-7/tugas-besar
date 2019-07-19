const express = require('express');
const auth = require('../configs/auth');

const router = express.Router();

const deliveryController = require('../controllers/delivery');

router.post('/',auth.verifyToken ,deliveryController.postDelivery);

module.exports = router;