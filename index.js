const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.json());

// routes
const homeRouter = require('./routes/home');
const bukuRouter = require('./routes/buku');
const userRouter = require('./routes/user');
const kategoriRouter = require('./routes/kategori');
const sequelize = require('./configs/sequelize');

// Models
const Buku = require('./models/buku');
const Kategori = require('./models/kategori');
const User = require('./models/user');

app.use(homeRouter);
app.use('/buku', bukuRouter);
app.use('/kategori', kategoriRouter);
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('server started');
    sequelize.sync();
})