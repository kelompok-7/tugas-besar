const express = require('express');
const auth = require('../configs/auth');

const router = express.Router();

const bookController = require('../controllers/book');

router.get('/',auth.verifyToken ,bookController.getAllBook);
router.get('/:judul',auth.verifyToken ,bookController.getBook);
router.post('/',auth.verifyToken ,bookController.postBook);
router.put('/:id',auth.verifyToken ,bookController.putBook);
router.delete('/:id',auth.verifyToken ,bookController.deleteBook);

module.exports = router;