//Una mesa tiene platos, que han sido pedidos, asociados

const express = require('express');
const router = express.Router();
const DBManager = require('./DBManager');
const conection = require('../Database/queries');
//Un menu es una lista de platos

router.get('/create', (req, res) => {
    res.status(200);
    res.send("Mesa Creada!");
});

//seleccionar mesa

//A la mesa seleccionada poderle agregar platos

module.exports = router;