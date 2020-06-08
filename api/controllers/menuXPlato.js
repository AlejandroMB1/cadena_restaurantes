const conection = require('../../dal/queries/menuXPlatoQueries');

module.exports = {

    createNewMenuxplato : async function(req, res) {
        var idMenu = req.body.idMenu;
        var idPlato = req.body.idPlato;
        var result = await conection.createNewMenuxplato(idMenu, idPlato);
        if(result == 0){
            //res.send("Error creating a menuxplato - conflict")
            res.sendStatus(400);
        
        }
        else{
            res.sendStatus(201);
            //res.send("successful - created")
        }
    },

    getMenuxplato : async function(req, res, next){
        var id = req.params.id;
        var Menuxplato;
        res.setHeader('Content-Type', 'application/json');
        if (id == undefined){
            Menuxplato = await conection.getAllMenuxplato();
            res.send(JSON.stringify(Menuxplato, null, 4));
        }
        else{
            Menuxplato = await conection.getMenuxplatoById(id);
            res.send(JSON.stringify(Menuxplato, null, 4));
        }
        res.sendStatus(400)  
    },

    deleteMenuxplato : async function(req, res) {
        var id = req.params.id;
        var result =  await conection.deleteMenuxplato(id);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    }
}