const conection = require('../../dal/queries/empleadoQueries');

module.exports = {

    createNewEmpleado : async function(req, res) {
        var cargo = req.body.cargo;
        var direccion = req.body.direccion;
        var telefono = req.body.telefono;
        var fechaIngreso = req.body.fechaIngreso;
        var salario = req.body.salario;
        var idSucursal = req.body.idSucursal;
        var result = await conection.createNewEmpleado(cargo, direccion, telefono, fechaIngreso, salario, idSucursal);
        if(result == 0){
            //res.send("Error creating a empleado - conflict")
            res.sendStatus(400);
        
        }
        else{
            res.sendStatus(201);
            //res.send("successful - created")
        }
    },

    getEmpleado : async function(req, res, next){
        var id = req.params.id;
        var empleado;
        res.setHeader('Content-Type', 'application/json');
        if (id == undefined){
            empleado = await conection.getAllEmpleados();
            res.send(JSON.stringify(empleado, null, 4));
        }
        else{
            empleado = await conection.getEmpleadoById(id);
            res.send(JSON.stringify(empleado, null, 4));
        }
    },

    updateEmpleado : async function(req, res) {
        var id = req.body.id;
        var cargo = req.body.cargo;
        var direccion = req.body.direccion;
        var telefono = req.body.telefono;
        var salario = req.body.salario;
        var result =  await conection.updateEmpleado(id, cargo, direccion, telefono, salario);
        if(result == 0){
            res.sendStatus(400)
        }
        else{
            res.sendStatus(200);
        }
    },

    deleteEmpleado : async function(req, res) {
        var id = req.params.id;
        var result =  await conection.deleteEmpleado(id);
        if(result == 0){
            res.sendStatus(400);
        }
        else{
            res.sendStatus(200);
        }
    }
}