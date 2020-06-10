const conection = require('../../dal/queries/PlatesQueries');

module.exports = {

    createNewPlate : async function(req, res) {
        var nombre = req.body.nombre;
        var descripcion = req.body.descripcion;
        var valor = req.body.valor;
        var result = await conection.createNewPlate(nombre, valor, descripcion);
        if(result == 0){
            //res.send("Error creating a plate - conflict")
            res.sendStatus(400);
        
        }
        else{
            res.sendStatus(201);
            //res.send("successful - created")
        }
    },

    getPlate : async function(req, res, next){
        var id = req.params.id;
        var plate;
        res.setHeader('Content-Type', 'application/json');
        if (id == undefined){
            plate = await conection.getAllPlates();
            res.send(JSON.stringify(plate, null, 4));
        }
        else{
            plate = await conection.getPlateById(id);
            res.send(JSON.stringify(plate));
        } 
    },

    updatePlate : async function(req, res) {
        var id = req.body.id;
        var nombre = req.body.nombre;
        var descripcion = req.body.descripcion;
        var valor = req.body.valor;
        var result =  await conection.updatePlate(id, nombre, valor, descripcion);
        if(result == 0){
            res.sendStatus(400)
        }
        else{
            res.sendStatus(200);
        }
    },

    deletePlate : async function(req, res) {
        var id = req.params.id;
        var result =  await conection.deletePlate(id);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    }
}