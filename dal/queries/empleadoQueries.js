const mariadb = require('../../config/conn');
module.exports = {

    createNewEmpleado : async function (cargo, direccion, telefono, fechaIngreso, salario, idSucursal){
        try {
            let conn = await mariadb.getConn();
            let fecha = new Date();
            let query ="INSERT INTO Empleado(cargo, direccion, telefono, fechaIngreso, salario, idSucursal) VALUES(?,?,?,?,?,?)";
            let values = [cargo, direccion, telefono, fechaIngreso, salario, idSucursal];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },
    getAllEmpleado : async function (){
        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM Empleado;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getEmpleadoById : async function(id){
        try {
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM Empleado WHERE id = ?";
            let value = [id];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error)
        }
    },

    updateEmpleado : async function(id, cargo, direccion, telefono, salario){
        try{
            let conn = await mariadb.getConn();
            let query = "UPDATE Empleado SET cargo = ?, direccion = ?, telefono = ?, salario = ? WHERE id = ?";
            let value = [cargo, direccion, telefono, salario, id]
            let row = await conn.query(query, value); 
            conn.end();
            return row.affectedRows;
        } catch(error){
            console.log(error);
            return 0
        }
    },
    deleteEmpleado : async function(id){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM Empleado WHERE id = ?";
            let value = [id]
            let row = await conn.query(query, value); 
            conn.end();
            return row.affectedRows;
        } catch(error){
            console.log(error);
            return 0
        }
    }
}
