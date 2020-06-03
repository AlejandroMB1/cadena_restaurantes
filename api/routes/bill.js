const express = require('express')
const router = express.Router()
const conection = require('../../dal/queries');

router.post('/createBill', async function(req, res) {
    var idEmpleado = req.body.idEmpleado;
    var fecha = req.body.fecha;
    var descuento = req.body.descuento;
    var idCliente = req.body.idCliente;
    var result = await conection.createNewBill(idEmpleado, fecha, descuento, idCliente);
    if(result == 0){
        res.send("Error creating a bill")
    }
    else{
        res.send("successful")
    }
}); 

router.get('/getBill/:id?', async function(req, res, next){
    var id = req.params.id;
    var bill;
    res.setHeader('Content-Type', 'application/json');
    console.log(id);
    if (id == undefined){
        bill = await conection.getAllBill();
        res.send(JSON.stringify(bill, null, 4));
    }
    else{
        bill = await conection.getBillById(id);
        res.send(JSON.stringify(bill, null, 4));
    }  
})

router.put('/updateBill', async function(req, res) {
    var id = req.body.id;
    var fecha = req.body.fecha;
    var descuento = req.body.descuento;
    var idCliente = req.body.idCliente;
    var result =  await conection.updateBill(id, fecha, descuento, idCliente);
    if(result == 0){
        res.send("Error updating data")
    }
    else{
        res.send("successful")
    }
});

router.delete('/deleteBill/:id', async function(req, res) {
    var id = req.params.id;
    var result =  await conection.deleteBill(id);
    if(result == 0){
        res.send("Error deleting user")
    }
    else{
        res.send("successful")
    }
});

router.get('/login/:username/:password', (req, res) => {
    res.send("Server Running!");
});

router.get('/logout/:username', (req, res) => {
    res.send("Server Running!");
});

module.exports = router;