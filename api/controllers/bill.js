const conection = require('../../dal/queries/billQueries');

module.exports = {

    createNewBill : async function(req, res) {
        var idEmpleado = req.body.idEmpleado;
        var descuento = req.body.descuento;
        var nombreCliente = req.body.nombreCliente;
        var cedula = req.body.cedula;
        //var idPedido = req.body.idPedido;
        //var valorTotal = await conection.calcularTotal(idPedido); //calcular con la tabla PedidoXPlato
        var valorTotal = 70000
        var result = await conection.createNewBill(idEmpleado, nombreCliente, cedula, descuento, valorTotal);
        if(result == 0){
            //res.send("Error creating a bill - conflict")
            res.sendStatus(400);
        
        }
        else{
            res.sendStatus(201);
            //res.send("successful - created")
        }
    },

    getBill : async function(req, res, next){
        var id = req.params.id;
        var bill;
        res.setHeader('Content-Type', 'application/json');
        if (id == undefined){
            bill = await conection.getAllBill();
            res.send(JSON.stringify(bill, null, 4));
        }
        else{
            bill = await conection.getBillById(id);
            res.send(JSON.stringify(bill, null, 4));
        } 
    },

    updateBill : async function(req, res) {
        var id = req.body.id;
        var idEmpleado = req.body.idEmpleado;
        var descuento = req.body.descuento;
        var nombreCliente = req.body.nombreCliente;
        var cedula = req.body.cedula;
        var valorTotal = req.body.valorTotal;
        var result =  await conection.updateBill(id, nombreCliente, cedula, descuento, valorTotal);
        if(result == 0){
            res.sendStatus(400)
        }
        else{
            res.sendStatus(200);
        }
    },

    deleteBill : async function(req, res) {
        var id = req.params.id;
        var result =  await conection.deleteBill(id);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    }
}