const conection = require('../../dal/queries/pedidoXPlatoQueries');

module.exports = {

    createNewOrderXPlate : async function(req, res) {
        var idOrder = req.body.idOrder;
        var idPlate = req.body.idPlate;
        var cantidad = req.body.cantidad;
        var result = await conection.createNewOrderXPlate(idOrder, idPlate, cantidad);
        if(result == 0){
            //res.send("Error creating a orderxplate - conflict")
            res.sendStatus(400);
        
        }
        else{
            res.sendStatus(201);
            //res.send("successful - created")
        }
    },

    getOrderXPlate : async function(req, res, next){
        var id = req.params.id;
        var orderxplate;
        res.setHeader('Content-Type', 'application/json');
        if (id == undefined){
            orderxplate = await conection.getAllOrderXPlate();
            res.send(JSON.stringify(orderxplate, null, 4));
        }
        else{
            orderxplate = await conection.getOrderXPlateById(id);
            res.send(JSON.stringify(orderxplate, null, 4));
        }
        res.sendStatus(400)  
    },

    updateOrderXPlate : async function(req, res) {
        var id = req.body.id;
        var idOrder = req.body.idOrder;
        var idPlate = req.body.idPlate;
        var cantidad = req.body.cantidad;
        var result =  await conection.updateOrderXPlate(id, idOrder, idPlate, cantidad);
        if(result == 0){
            res.sendStatus(400)
        }
        else{
            res.sendStatus(200);
        }
    },

    deleteOrderXPlate : async function(req, res) {
        var id = req.params.id;
        var result =  await conection.deleteOrderXPlate(id);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    }
}