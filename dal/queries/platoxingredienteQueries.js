const mariadb = require('../../config/conn');

module.exports = {

    createNewPlatoxingrediente : async function (idIngrediente, idPlato){
        try {
            let conn = await mariadb.getConn();
            let query ="INSERT INTO PlatoXIngrediente(idIngrediente, idPlato) VALUES(?,?)";
            let values = [idIngrediente, idPlato];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },
    getAllPlatoxingrediente : async function (){
        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM PlatoXIngrediente;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getPlatoxingredienteById : async function(id){
        try {
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM PlatoXIngrediente WHERE id = ?";
            let value = [id];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error)
        }
    },
    deletePlatoxingrediente : async function(id){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM PlatoXIngrediente WHERE id = ?";
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
