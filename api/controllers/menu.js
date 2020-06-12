const conection = require('../../dal/queries/menuQueries');

module.exports = {

    createNewMenu : async function(req, res) {
        var nombre = req.body.nombre;
        var idCadenaRestaurante = req.body.idCadenaRestaurante;
        var result = await conection.createNewMenu(nombre, idCadenaRestaurante);
        if(result == 0){
            //res.send("Error creating a menú - conflict")
            res.sendStatus(400);
        
        }
        else{
            res.sendStatus(201);
            //res.send("successful - created")
        }
    },

    getMenu : async function(req, res, next){
        var id = req.params.id;
        var menu;
        res.setHeader('Content-Type', 'application/json');
        if (id == undefined){
            menu = await conection.getAllMenu();
            res.send(JSON.stringify(menu, null, 4));
        }
        else{
            menu = await conection.getMenuById(id);
            if (menu[0] == undefined){
                res.sendStatus(404);
            }
            res.send(JSON.stringify(menu, null, 4));
        }
    },

    updateMenu : async function(req, res) {
        var id = req.body.id;
        var nombre = req.body.nombre;
        var result =  await conection.updateMenu(id, nombre);
        if(result == 0){
            res.sendStatus(400)
        }
        else{
            res.sendStatus(200);
        }
    },

    deleteMenu : async function(req, res) {
        var id = req.params.id;
        var result =  await conection.deleteMenu(id);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    }
}