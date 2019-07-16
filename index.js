const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());

// routes
const homeRouter = require('./routes/home');
const productRouter = require('./routes/product');
const bukuRouter = require('./routes/buku');
const kategoriRouter = require('./routes/kategori');
const sequelize = require('./configs/sequelize');

// Models
const Product = require('./models/product');
const Buku = require('./models/buku');
const Kategori = require('./models/kategori');

app.use(homeRouter);
app.use('/product', productRouter);
app.use('/buku', bukuRouter);
app.use('/kategori', kategoriRouter);

app.listen(3000, () => {
    console.log('server started');
    sequelize.sync();
})