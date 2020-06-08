const express = require('express')
const router = express.Router()
const billXPlatosControllers = require('../controllers/billXPlate');
//Un plato tiene una lista de ingredientes y cantidades ademas de una descripcion y precio

router.post('/create', billXPlatosControllers.createNewBillXPlate);

router.get('/getBillXPlate/:id?', billXPlatosControllers.getBillXPlate);

router.delete('/delete/:id', billXPlatosControllers.deleteBillXPlate);

module.exports = router;