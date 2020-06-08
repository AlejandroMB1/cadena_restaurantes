const express = require('express')
const router = express.Router()
const menuXPlatosControllers = require('../controllers/menuXPlato');
//Un plato tiene una lista de ingredientes y cantidades ademas de una descripcion y precio

router.post('/create', menuXPlatosControllers.createNewMenuxplato);

router.get('/getMenuXPlato/:id?', menuXPlatosControllers.getMenuxplato);

router.delete('/delete/:id', menuXPlatosControllers.deleteMenuxplato);

module.exports = router;