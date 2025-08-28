const express = require('express');
const router = express.Router();
const isloggedin = require("../middleware/isloggedIn");
const productModel = require("../models/product-model")

router.get('/', function (req, res) {
    let error = req.flash("error");
    res.render('index', { error , loggedin :false  });
});

router.get("/shop", isloggedin, async function (req, res) {
    let products = await productModel.find();
    res.render("shop", { products });
});

router.post("/shop", isloggedin, function (req, res) {
    let productId = req.body.productId;

    res.redirect("/shop");
});

router.get("/logout", isloggedin, function (req, res) {
    res.render("shop");
})

module.exports = router;