const mariadb = require('../../config/conn');
module.exports = {

    createNewUser : async function (nombres, apellidos, correo, contrasena, idRol){
        try {
            let conn = await mariadb.getConn();
            let query ="INSERT INTO Usuario(nombres, apellidos, correo, contrasena, idRol) VALUES(?,?,?,?,?)";
            let values = [nombres, apellidos, correo, contrasena, idRol];
            let row = await conn.query(query,values);
            conn.end();
            return row.affectedRows;
        } catch (error) {
            console.log(error);
            return 0;
        }
    },
    getAllUsers : async function (){

        try {
            let conn = await mariadb.getConn();
            let row = await conn.query("SELECT * FROM Usuario;");
            conn.end();
            return row;

        } catch (err) {
            console.log(err);
        }
    },

    getUserById : async function(id){
        try{
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM Usuario WHERE id = ?";
            let value = [id];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        }catch(error){
            console.log(error);
        }
    },

    getUserByName : async function(name){
        try{
            let conn = await mariadb.getConn();
            let query = "SELECT * FROM Usuario WHERE nombres = ?";
            let value = [name];
            let row = await conn.query(query, value); 
            conn.end();
            return row;
        } catch(error){
            console.log(error);
        }
    },
    updateUser : async function(id, name, last, pass){
        try{
            let conn = await mariadb.getConn();
            let query = "UPDATE Usuario SET nombres = ?, apellidos = ?, contrasena = ? WHERE id = ?";
            let value = [name, last, pass, id]
            let row = await conn.query(query, value); 
            conn.end();
            return row.affectedRows;
        } catch(error){
            console.log(error);
            return 0
        }
    },
    deleteUser : async function(id){
        try{
            let conn = await mariadb.getConn();
            let query = "DELETE FROM Usuario WHERE id = ?";
            let value = [id]
            let row = await conn.query(query, value); 
            conn.end();
            return row.affectedRows;
        }catch(error){
            console.log(error);
            return 0;
        }
    }
}
