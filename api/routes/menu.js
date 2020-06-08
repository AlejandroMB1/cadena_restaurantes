const express = require('express')
const router = express.Router()
const menuControllers = require('../controllers/menu');

router.post('/create', menuControllers.createNewMenu);

router.get('/getMenu/:idOrName?', menuControllers.getMenu);

router.put('/update', menuControllers.updateMenu);

router.delete('/delete/:id',menuControllers.deleteMenu);

module.exports = router;