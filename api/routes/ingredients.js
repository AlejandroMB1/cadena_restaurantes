const express = require('express')
const router = express.Router()
const conection = require('../../dal/queries');
//Un plato tiene una lista de ingredientes y cantidades ademas de una descripcion y precio

router.post('/create', async (req, res) => {
    try {
        let newIngredient = await DBManager.createIngredient(req.body);        
        res.status(201).json(newIngredient);
    } catch (error) {
        res.status(400).json({message:error.message});
    }
});

router.get('/getAll', async (req, res) => {
    try {
        const ingredients = await DBManager.getAllIngedients();
        res.json(ingredients);
    } catch (error) {
        res.status(500).json({message:error.message});
    }
});

router.delete('/delete/:ingredientId', (req, res) => {
    res.send("Server Running!");
});

router.get('/get/:ingredientId', (req, res) => {
    res.send("Server Running!");
});

module.exports = router;