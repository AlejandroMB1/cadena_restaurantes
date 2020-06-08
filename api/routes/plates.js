const express = require('express')
const router = express.Router()
const platesControllers = require('../controllers/plates');
//Un plato tiene una lista de ingredientes y cantidades ademas de una descripcion y precio

router.post('/create', platesControllers.createNewPlate);

router.get('/getPlate/:id?', platesControllers.getPlate);

router.delete('/delete/:id', platesControllers.deletePlate);

router.put('/update', platesControllers.updatePlate);

module.exports = router;