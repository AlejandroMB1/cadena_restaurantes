const express = require('express')
const router = express.Router()
const billControllers = require('../controllers/bill');

router.post('/createBill', billControllers.createNewBill); 

router.get('/getBill/:id?', billControllers.getBill);

router.put('/updateBill', billControllers.updateBill);

router.delete('/deleteBill/:id', billControllers.deleteBill);

module.exports = router;