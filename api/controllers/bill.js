const conection = require('../../dal/queries/billQueries');

module.exports = {

    createNewBill : async function(req, res) {
        var idEmpleado = req.body.idEmpleado;
        var descuento = req.body.descuento;
        var nombreCliente = req.body.nombreCliente;
        var cedula = req.body.cedula;
        //var idPedido = req.body.idPedido;
        //var valorTotal = await conection.calcularTotal(idPedido); //calcular con la tabla PedidoXPlato
        var valorTotal = 25000
        var result = await conection.createNewBill(idEmpleado, nombreCliente, cedula, descuento, valorTotal);
        if(result == 0){
            res.send("Error creating a bill")
        }
        else{
            res.send("successful")
        }
    },

    getBill : async function(req, res, next){
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
    },

    updateBill : async function(req, res) {
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
    },

    deleteBill : async function(req, res) {
        var id = req.params.id;
        var result =  await conection.deleteBill(id);
        if(result == 0){
            res.send("Error deleting user")
        }
        else{
            res.send("successful")
        }
    }
}