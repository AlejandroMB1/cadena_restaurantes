const express = require('express')
const router = express.Router()
const platesControllers = require('../controllers/Platoxingrediente');
//Un plato tiene una lista de ingredientes y cantidades ademas de una descripcion y precio

router.post('/create', platesControllers.createNewPlatoxingrediente);

router.get('/getPlate/:id?', platesControllers.getPlatoxingrediente);

router.delete('/delete/:id', platesControllers.deletePlatoxingrediente);

module.exports = router;