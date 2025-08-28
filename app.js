const express = require('express');
// const userModel = require('./models/user-model');
const productModel = require('./models/product-model');
const cookieParser = require('cookie-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const multer = require('multer');

require('dotenv').config();

const db = require("./config/mongoose-connection");
const ownersRouter = require('./routes/ownersRouter');
const usersRouter = require('./routes/usersRouter');
const productsRouter = require('./routes/productsRouter');
const index = require('./routes/index');
const expressSession = require("express-session");
const flash = require("connect-flash");

const app = express();
app.set('view engine' ,"ejs");
app.use(express.json());
app.use(express.urlencoded({extended :true}));
app.use(cookieParser());
app.use (
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret:process.env.EXPRESS_SESSION_SECRET,
    })
);
app.use(flash());
app.use(express.static(path.join(__dirname,'public')));


app.use('/',index);
app.use('/owners' ,ownersRouter);
app.use('/users',usersRouter);
app.use('/products',productsRouter);


app.listen(3000);