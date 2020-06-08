const express = require('express')
const router = express.Router()
const empleadoControllers = require('../controllers/empleado');

router.post('/create', empleadoControllers.createNewEmpleado); 

router.get('/getEmpleado/:id?', empleadoControllers.getEmpleado);

router.put('/update', empleadoControllers.updateEmpleado);

router.delete('/delete/:id', empleadoControllers.deleteEmpleado);

module.exports = router;