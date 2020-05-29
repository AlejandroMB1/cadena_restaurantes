const express = require('express');
const router = express.Router();
const conection = require('../../dal/queries');
//Un menu es una lista de platos

router.get('/:menuName', (req, res) => {
    res.send("MenuName");
});

router.get('/:menuId', (req, res) => {
    res.send("Server Running!");
});

module.exports = router;