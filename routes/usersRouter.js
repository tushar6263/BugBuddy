const express = require('express');
const router = express.Router();
const isloggedin = require('../middleware/isloggedin')
const { 
    registerUser,
     loginUser,
     logout, 
    } = require("../controllers/authController"); 

router.get('/', (req, res) => {
    res.send('Hello from users route');
});

router.post('/register', registerUser); 

router.post('/login' , loginUser);

router.get("/logout",logout);

module.exports = router;
