const mariadb = require('../../config/conn');
module.exports = {

    createNewBill : async function (idEmpleado, fecha, descuento, nombreCliente){
        try {
            let conn = await mariadb.getConn();
            let query ="INSERT INTO Factura(idEmpleado, fecha, descuento, nombreCliente, cedula) VALUES(?,?,?,?,?)";
            let values = [nombres, apellidos, correo, contrasena, idRol];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
        }
    },
    getAllBill : async function (){

        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM Usuario;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getBillById : async function(id){
        let conn = await mariadb.getConn();
        let query = "SELECT * FROM Usuario WHERE idUsuario = ?";
        let value = [id];
        let row = await conn.query(query, value); 
        conn.end();
        return row;
    },

    updateBill : async function(id, name, last, pass){
        let conn = await mariadb.getConn();
        let query = "UPDATE Usuario SET nombres = ?, apellidos = ?, contrasena = ? WHERE idUsuario = ?";
        let value = [name, last, pass, id]
        let row = await conn.query(query, value); 
        conn.end();
        return row.affectedRows;
    },
    deleteBill : async function(id){
        let conn = await mariadb.getConn();
        let query = "DELETE FROM Usuario WHERE idUsuario = ?";
        let value = [id]
        let row = await conn.query(query, value); 
        conn.end();
        return row.affectedRows;
    }
}
