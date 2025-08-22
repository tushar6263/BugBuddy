const express = require('express');
// const userModel = require('./models/user-model');
const productModel = require('./models/product-model');
const cookieParser = require('cookie-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');


const db = require("./config/mongoose-connection");
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsrouter');


const app = express();
app.set('view engine' ,"ejs");
app.use(express.json());
app.use(express.urlencoded({extended :true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,'public')));

app.use('/owners' ,ownersRouter);
app.use('/users',usersRouter);
app.use('/products',productsRouter);

app.listen(3000);