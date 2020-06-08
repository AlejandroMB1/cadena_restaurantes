const express = require('express')
const router = express.Router()
const IngredientsControllers = require('../controllers/Ingredients');

router.post('/create', IngredientsControllers.createNewIngredient);

router.get('/getIngredient/:idOrName?', IngredientsControllers.getIngredient);

router.put('/update', IngredientsControllers.updateIngredient);

router.delete('/delete/:id',IngredientsControllers.deleteIngredient);

module.exports = router;