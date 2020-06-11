const express = require('express')
const router = express.Router()
const usersControllers = require('../controllers/users');

router.post('/create', usersControllers.createNewUser);

router.post('/login', usersControllers.login);

router.get('/getUser/:idOrName?', usersControllers.getUser);

router.put('/update', usersControllers.updateUser);

router.delete('/delete/:id',usersControllers.deleteUser);

module.exports = router;