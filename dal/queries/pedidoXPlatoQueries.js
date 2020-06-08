const mariadb = require('../../config/conn');

module.exports = {

    createNewOrderXPlate : async function (idOrder, idPlate, cantidad){
        try {
            let conn = await mariadb.getConn();
            let query ="INSERT INTO PedidoXPlato(idPedido, idPlato, cantidad) VALUES(?,?,?)";
            let values = [idOrder, idPlate, cantidad];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },
    getAllOrderXPlate : async function (){
        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM PedidoXPlato;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getOrderXPlateById : async function(id){
        try {
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM PedidoXPlato WHERE id = ?";
            let value = [id];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error)
        }
    },

    updateOrderXPlate : async function(cantidad){
        try{
            let conn = await mariadb.getConn();
            let query = "UPDATE PedidoXPlato SET cantidad = ? WHERE id = ?";
            let value = [cantidad]
            let row = await conn.query(query, value); 
            conn.end();
            return row.affectedRows;
        } catch(error){
            console.log(error);
            return 0
        }
    },
    deleteOrderXPlate : async function(id){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM PedidoXPlato WHERE id = ?";
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
