const express = require('express')
const router = express.Router()
//Un plato tiene una lista de ingredientes y cantidades ademas de una descripcion y precio

router.post('/create', (req, res) => {
    //envia un json del plato
    res.send("Plato Creado");
});

router.get('/plates/getAll', (req, res) => {
    res.send("Server Running!");
});

router.get('/plates/delete/:plateId', (req, res) => {
    res.send("Server Running!");
});

router.get('/plates/get/:plateId', (req, res) => {
    res.send("Server Running!");
});

router.post('/plates/update/:plateId', (req, res) => {
    //Envia un json del plato
    res.send("Server Running!");
});

module.exports = router;