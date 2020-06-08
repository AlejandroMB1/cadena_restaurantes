const mariadb = require('../../config/conn');

module.exports = {

    createNewPedido : async function (idEmpleado){
        try {
            let conn = await mariadb.getConn();
            let fecha = new Date();
            let query ="INSERT INTO Pedido(idEmpleado, fecha) VALUES(?,?)";
            let values = [idEmpleado, fecha];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },
    getAllPedido : async function (){
        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM Pedido;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getPedidoById : async function(id){
        try {
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM Pedido WHERE id = ?";
            let value = [id];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error)
        }
    },

    updatePedido : async function(id, fecha){
        try{
            let conn = await mariadb.getConn();
            let query = "UPDATE Pedido SET fecha = ? WHERE id = ?";
            let value = [fecha, id]
            let row = await conn.query(query, value); 
            conn.end();
            return row.affectedRows;
        } catch(error){
            console.log(error);
            return 0
        }
    },
    deletePedido : async function(id){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM Pedido WHERE id = ?";
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
