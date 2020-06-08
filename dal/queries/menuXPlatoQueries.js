const mariadb = require('../../config/conn');

module.exports = {

    createNewMenuxplato : async function (idMenu, idPlato){
        try {
            let conn = await mariadb.getConn();
            let query ="INSERT INTO MenuXPlato(idMenu, idPlato) VALUES(?,?)";
            let values = [idMenu, idPlato];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },
    getAllMenuxplato : async function (){
        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM MenuXPlato;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getMenuxplatoById : async function(id){
        try {
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM MenuXPlato WHERE id = ?";
            let value = [id];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error)
        }
    },
    deleteMenuxplato : async function(id){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM MenuXPlato WHERE id = ?";
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
