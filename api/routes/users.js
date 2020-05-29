const express = require('express')
const router = express.Router()
const conection = require('../../dal/queries');

// router.get('/create/:username/:password', async function(req, res) {
//     var username = req.params.username;
//     var pass = req.params.password;
//     await conection.createNewUser(username, pass);
// });

router.post('/create', async function(req, res) {
    var nombres = req.body.nombres;
    var apellidos = req.body.apellidos;
    var correo = req.body.correo;
    var contrasena = req.body.contrasena;
    var idRol = req.body.idRol;
    var result =  await conection.createNewUser(nombres, apellidos, correo, contrasena, idRol);
    if(result == 0){
        res.send("Error creating user account")
    }
    else{
        res.send("successful")
    }
});

router.get('/getUser/:idOrName?', async function(req, res, next){
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
})

router.put('/update', async function(req, res) {
    var id = req.body.idUsuario;
    var nombres = req.body.nombres;
    var apellidos = req.body.apellidos;
    var contrasena = req.body.contrasena;
    var result =  await conection.updateUser(id, nombres, apellidos, contrasena);
    if(result == 0){
        res.send("Error updating data")
    }
    else{
        res.send("successful")
    }
});

router.delete('/delete/:id', async function(req, res) {
    var id = req.params.id;
    var result =  await conection.deleteUser(id);
    if(result == 0){
        res.send("Error deleting user")
    }
    else{
        res.send("successful")
    }
});

router.get('/login/:username/:password', (req, res) => {
    res.send("Server Running!");
});

router.get('/logout/:username', (req, res) => {
    res.send("Server Running!");
});

module.exports = router;