const express = require('express');
const auth = require('../configs/auth');

const router = express.Router();

const orderController = require('../controllers/order');

router.post('/',auth.verifyToken ,orderController.postOrder);

module.exports = router;