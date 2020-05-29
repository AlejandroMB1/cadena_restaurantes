const express = require('express')
const router = express.Router()
const conection = require('../../dal/queries');

//Una factura tiene una lista de platos y sus precios

router.get('/getAll', (req, res) => {
    res.send("Server Running!");
});

router.get('/create/:tableId', (req, res) => {
    res.send("Server Running!");
});

module.exports = router;