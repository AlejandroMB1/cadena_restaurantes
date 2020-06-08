const conection = require('../../dal/queries/pedidoQueries');

module.exports = {

    createNewPedido : async function(req, res) {

        var idEmpleado = req.body.idEmpleado;
        var result = await conection.createNewPedido(idEmpleado);
        if(result == 0){
            //res.send("Error creating a Pedido - conflict")
            res.sendStatus(400);
        
        }
        else{
            res.sendStatus(201);
            //res.send("successful - created")
        }
    },

    getPedido : async function(req, res, next){
        var id = req.params.id;
        var Pedido;
        res.setHeader('Content-Type', 'application/json');
        if (id == undefined){
            Pedido = await conection.getAllPedido();
            res.send(JSON.stringify(Pedido, null, 4));
        }
        else{
            Pedido = await conection.getPedidoById(id);
            res.send(JSON.stringify(Pedido, null, 4));
        } 
    },

    updatePedido : async function(req, res) {
        var id = req.body.id;
        var fecha = req.body.fecha;
        var result =  await conection.updatePedido(id, fecha);
        if(result == 0){
            res.sendStatus(400)
        }
        else{
            res.sendStatus(200);
        }
    },

    deletePedido : async function(req, res) {
        var id = req.params.id;
        var result =  await conection.deletePedido(id);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    }
}