const mariadb = require('../../config/conn');

module.exports = {

    createNewBillXPlate : async function (idBill, idPlate){
        try {
            let conn = await mariadb.getConn();
            let query ="INSERT INTO FacturaXPlato(idFactura, idPlato) VALUES(?,?)";
            let values = [idBill, idPlate];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },
    getAllBillXPlate : async function (){
        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM FacturaXPlato;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getBillXPlateById : async function(id){
        try {
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM FacturaXPlato WHERE id = ?";
            let value = [id];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error)
        }
    },
    deleteBillXPlate : async function(id){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM FacturaXPlato WHERE id = ?";
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
