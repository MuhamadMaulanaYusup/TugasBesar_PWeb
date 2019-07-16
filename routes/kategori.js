const express = require('express');

const router = express.Router();

const kategoriController = require('../controllers/kategori');

router.get('/', kategoriController.getKategori);
router.post('/', kategoriController.postKategori);
router.put('/:id', kategoriController.putKategori);
router.delete('/:id', kategoriController.deleteKategori);

module.exports = router;