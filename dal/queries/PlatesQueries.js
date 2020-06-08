const mariadb = require('../../config/conn');

module.exports = {

    createNewPlate : async function (nombre, valor, descripcion){
        try {
            let conn = await mariadb.getConn();
            let query ="INSERT INTO Plato(nombre, valor, descripcion) VALUES(?,?,?)";
            let values = [nombre, valor, descripcion];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },
    getAllPlates : async function (){
        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM Plato;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getPlateById : async function(id){
        try {
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM Plato WHERE id = ?";
            let value = [id];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error)
        }
    },

    updatePlate : async function(id, nombre, valor, descripcion){
        try{
            let conn = await mariadb.getConn();
            let query = "UPDATE Plato SET nombre = ?, valor = ?, descripcion = ? WHERE id = ?";
            let value = [nombre, valor, descripcion, id]
            let row = await conn.query(query, value); 
            conn.end();
            return row.affectedRows;
        } catch(error){
            console.log(error);
            return 0
        }
    },
    deletePlate : async function(id){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM Plato WHERE id = ?";
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
