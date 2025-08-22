const express = require('express');
const router = express.Router();

router.get('/',function (req ,res) {
    res.send('Hello from users route');
});


module.exports = router;