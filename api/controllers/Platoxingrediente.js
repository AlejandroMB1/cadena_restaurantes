const conection = require('../../dal/queries/platoxingredienteQueries');

module.exports = {

    createNewPlatoxingrediente : async function(req, res) {
        var idIngrediente = req.body.idIngrediente;
        var idPlato = req.body.idPlato;
        var result = await conection.createNewPlatoxingrediente(idIngrediente, idPlato);
        if(result == 0){
            //res.send("Error creating a Platoxingrediente - conflict")
            res.sendStatus(400);
        
        }
        else{
            res.sendStatus(201);
            //res.send("successful - created")
        }
    },

    getPlatoxingrediente : async function(req, res, next){
        var id = req.params.id;
        var Platoxingrediente;
        res.setHeader('Content-Type', 'application/json');
        if (id == undefined){
            Platoxingrediente = await conection.getAllPlatoxingrediente();
            res.send(JSON.stringify(Platoxingrediente, null, 4));
        }
        else{
            Platoxingrediente = await conection.getPlatoxingredienteById(id);
            res.send(JSON.stringify(Platoxingrediente, null, 4));
        }
        res.sendStatus(400)  
    },

    deletePlatoxingrediente : async function(req, res) {
        var id = req.params.id;
        var result =  await conection.deletePlatoxingrediente(id);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    }
}