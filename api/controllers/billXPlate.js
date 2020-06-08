const conection = require('../../dal/queries/billXPlatesQueries');

module.exports = {

    createNewBillXPlate : async function(req, res) {
        var idPlato = req.body.idPlato;
        var idFactura = req.body.idFactura;
        var result = await conection.createNewBillXPlate(idFactura, idPlato );
        if(result == 0){
            //res.send("Error creating a Facturaxplato - conflict")
            res.sendStatus(400);
        
        }
        else{
            res.sendStatus(201);
            //res.send("successful - created")
        }
    },

    getBillXPlate : async function(req, res, next){
        var id = req.params.id;
        var Facturaxplato;
        res.setHeader('Content-Type', 'application/json');
        if (id == undefined){
            Facturaxplato = await conection.getAllBillXPlate();
            res.send(JSON.stringify(Facturaxplato, null, 4));
        }
        else{
            Facturaxplato = await conection.getBillXPlateById(id);
            res.send(JSON.stringify(Facturaxplato, null, 4));
        }
    },

    deleteBillXPlate : async function(req, res) {
        var id = req.params.id;
        var result =  await conection.deleteBillXPlate(id);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    }
}