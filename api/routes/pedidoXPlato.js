const express = require('express')
const router = express.Router()
const pedidoXPlatosControllers = require('../controllers/pedidoXPlato');
//Un plato tiene una lista de ingredientes y cantidades ademas de una descripcion y precio

router.post('/create', pedidoXPlatosControllers.createNewOrderXPlate);

router.get('/getPedidoXPlato/:id?', pedidoXPlatosControllers.getOrderXPlate);

router.delete('/delete/:id', pedidoXPlatosControllers.deleteOrderXPlate);

router.put('/update', pedidoXPlatosControllers.updateOrderXPlate);

module.exports = router;