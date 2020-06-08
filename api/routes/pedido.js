const express = require('express')
const router = express.Router()
const pedidoControllers = require('../controllers/pedido');

router.post('/create', pedidoControllers.createNewPedido); 

router.get('/getPedido/:id?', pedidoControllers.getPedido);

router.put('/update', pedidoControllers.updatePedido);

router.delete('/delete/:id', pedidoControllers.deletePedido);

module.exports = router;