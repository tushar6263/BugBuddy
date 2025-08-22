const express = require('express');
const router = express.Router();

router.get('/',function (_req ,res) {
    res.send('Hello from Owners route');
});


module.exports = router;