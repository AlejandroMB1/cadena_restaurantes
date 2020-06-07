const conection = require('../../dal/queries/UserQueries');

module.exports = {
    createNewUser :async function (req, res) {
        var nombres = req.body.nombres;
        var apellidos = req.body.apellidos;
        var correo = req.body.correo;
        var contrasena = req.body.contrasena;
        var idRol = req.body.idRol;
        var result =  await conection.createNewUser(nombres, apellidos, correo, contrasena, idRol);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(201);
        }
    },

    getUser : async function(req, res, next){
        var idOrName = req.params.idOrName;
        var usuarios;
        res.setHeader('Content-Type', 'application/json');
        console.log(idOrName);
        if (idOrName == undefined){
            usuarios = await conection.getAllUsers();
            res.send(JSON.stringify(usuarios, null, 4));
        }
        else if (isNaN(idOrName)){
            usuarios = await conection.getUserByName(idOrName);
            res.send(JSON.stringify(usuarios, null, 4));
        }
        else{
            usuarios = await conection.getUserById(idOrName);
            res.send(JSON.stringify(usuarios, null, 4));
        }
        res.sendStatus(400);  
    },

    updateUser : async function(req, res) {
        var id = req.body.idUsuario;
        var nombres = req.body.nombres;
        var apellidos = req.body.apellidos;
        var contrasena = req.body.contrasena;
        var result =  await conection.updateUser(id, nombres, apellidos, contrasena);
        if(result == 0){
            res.sendStatus(400);  
        }
        else{
            res.sendStatus(200);  
        }
    },

    deleteUser : async function(req, res) {
        var id = req.params.id;
        var result =  await conection.deleteUser(id);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    }

}