const mariadb = require('../../config/conn');
module.exports = {

    createNewIngredient : async function (nombre, medida){
        try {
            let conn = await mariadb.getConn();
            let query ="INSERT INTO Ingrediente(nombre, medida) VALUES(?,?)";
            let values = [nombre, medida];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },
    getAllIngredient : async function (){
        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM Ingrediente;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getIngredientById : async function(id){
        try {
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM Ingrediente WHERE id = ?";
            let value = [id];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error)
        }
    },

    updateIngredient : async function(id, nombre, medida){
        try{
            let conn = await mariadb.getConn();
            let query = "UPDATE Ingrediente SET nombre = ?, medida = ? WHERE id = ?";
            let value = [nombre, medida, id]
            let row = await conn.query(query, value); 
            conn.end();
            return row.affectedRows;
        } catch(error){
            console.log(error);
            return 0
        }
    },
    deleteIngredient : async function(id){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM Ingrediente WHERE id = ?";
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
