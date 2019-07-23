const express = require('express');

const router = express.Router();

const bukuController = require('../controllers/buku');
const auth = require('../configs/auth');
// ambil data buku
router.get('/', bukuController.getBuku);
// insert data buku
router.post('/', auth.verifyToken, bukuController.postBuku);
// update buku
router.put('/:id', auth.verifyToken, bukuController.putBuku);
// delete buku
router.delete('/:id', auth.verifyToken, bukuController.deleteBuku);

// nampilin buku berdasarkan id
router.get('/buku/:id', bukuController.findById);

module.exports = router;