const express = require('express');

const router = express.Router();

const bukuController = require('../controllers/buku');

router.get('/', bukuController.getBuku);
router.post('/', bukuController.postBuku);
router.put('/:id', bukuController.putBuku);
router.delete('/:id', bukuController.deleteBuku);

module.exports = router;