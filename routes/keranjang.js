const express = require('express');

const router = express.Router();

const keranjangController = require('../controllers/keranjang');

router.get('/', keranjangController.getKeranjang);
router.post('/',auth.verifyToken, keranjangController.postAddBuku);

module.exports = router;