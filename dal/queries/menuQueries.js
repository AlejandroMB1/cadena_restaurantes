const mariadb = require('../../config/conn');
module.exports = {

    createNewMenu : async function (nombre, idCadenaRestaurante){
        try {
            let conn = await mariadb.getConn();
            let fecha = new Date();
            let query ="INSERT INTO Menu(nombre, fechaCreacion, idCadenaRestaurante) VALUES(?,?,?)";
            let values = [nombre, fecha, idCadenaRestaurante];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },
    getAllMenu : async function (){
        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM Menu;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getMenuById : async function(id){
        try {
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM Menu WHERE id = ?";
            let value = [id];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error)
        }
    },

    updateMenu : async function(id, nombre){
        try{
            let conn = await mariadb.getConn();
            let query = "UPDATE Menu SET nombre = ? WHERE id = ?";
            let value = [nombre, id]
            let row = await conn.query(query, value); 
            conn.end();
            return row.affectedRows;
        } catch(error){
            console.log(error);
            return 0
        }
    },
    deleteMenu : async function(id){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM Menu WHERE id = ?";
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
