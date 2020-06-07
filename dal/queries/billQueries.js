const mariadb = require('../../config/conn');
module.exports = {

    createNewBill : async function (idEmpleado, nombreCliente, cedula, descuento, valorTotal){
        try {
            let conn = await mariadb.getConn();
            let fecha = new Date();
            let query ="INSERT INTO Factura(idEmpleado, fecha, nombreCliente, cedula, descuento, valorTotal) VALUES(?,?,?,?,?,?)";
            let values = [idEmpleado, fecha, nombreCliente, cedula, descuento, valorTotal];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },
    getAllBill : async function (){
        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM Factura;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getBillById : async function(id){
        try {
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM Factura WHERE id = ?";
            let value = [id];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error)
        }
    },

    updateBill : async function(id, idEmpleado, nombreCliente, cedula, descuento, valorTotal){
        try{
            let conn = await mariadb.getConn();
            let query = "UPDATE Factura SET idEmpleado = ?, nombreCliente = ?, cedula = ?, descuento = ?, valorTotal = ? WHERE id = ?";
            let value = [idEmpleado, nombreCliente, cedula, descuento, valorTotal, id]
            let row = await conn.query(query, value); 
            conn.end();
            return row.affectedRows;
        } catch(error){
            console.log(error);
            return 0
        }
    },
    deleteBill : async function(id){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM Factura WHERE id = ?";
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
