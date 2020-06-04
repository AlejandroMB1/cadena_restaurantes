const express = require('express')
const router = express.Router()
const conection = require('../../dal/queries');
const billControllers = require('../controllers/bill');

router.post('/createBill', billControllers.createNewBill); 

router.get('/getBill/:id?', billControllers.getBill);

router.put('/updateBill', billControllers.updateBill);

router.delete('/deleteBill/:id', billControllers.deleteBill);

module.exports = router;