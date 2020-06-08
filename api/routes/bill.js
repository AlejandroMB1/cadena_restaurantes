const express = require('express')
const router = express.Router()
const billControllers = require('../controllers/bill');

router.post('/create', billControllers.createNewBill); 

router.get('/getBill/:id?', billControllers.getBill);

router.put('/update', billControllers.updateBill);

router.delete('/delete/:id', billControllers.deleteBill);

module.exports = router;