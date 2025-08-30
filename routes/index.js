const express = require('express');
const router = express.Router();
const isloggedin = require("../middleware/isloggedin");
const productModel = require("../models/product-model");
const userModel = require('../models/user-model');

router.get('/', function (req, res) {
    let error = req.flash("error");
    res.render('index', { error , loggedin :false  });
});

router.get("/shop", isloggedin, async function (req, res) {
    let products = await productModel.find();
    let success = req.flash("success");
    res.render("shop", { products ,success });
});

router.get('/card', isloggedin, async function (req, res) {
  let user = await userModel.findOne({ email: req.user.email }).populate("cart");
  let success = req.flash("success"); 
  res.render('card', { user, success }); 
});


router.post("/removefromcart/:productid", isloggedin, async (req, res) => {
  let user = await userModel.findOne({ email: req.user.email });
  if (user && user.cart && user.cart.length > 0) {
    user.cart = user.cart.filter(item => item._id.toString() !== req.params.productid);
    await user.save();
  }
  req.flash("success", "Item removed from cart");
  res.redirect("/card");
});


router.get("/addtocart/:productid" , isloggedin , async function (req,res) {
    let user = await userModel.findOne({email : req.user.email});
   user.cart.push(req.params.productid);
   await user.save();
  req.flash("success" ,"Added to cart");
  res.redirect("/shop");
});


router.get("/logout", isloggedin, function (req, res) {
    res.render("shop");
})

module.exports = router;