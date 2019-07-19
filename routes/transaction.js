const express = require('express');
const auth = require('../configs/auth');

const router = express.Router();

const transactionController = require('../controllers/transaction');

router.get('/',auth.verifyToken, transactionController.getallTransaction);
router.get('/:id',auth.verifyToken, transactionController.getFindTransactionId);
router.post('/',auth.verifyToken, transactionController.postTransaction);
router.put('/:id',auth.verifyToken, transactionController.putTransaction);

module.exports = router;