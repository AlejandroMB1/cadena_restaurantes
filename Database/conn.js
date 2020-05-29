//DataBase conection
const mariadb = require('mariadb');

var pool =  mariadb.createPool({
        host: 'restaurante.cyy2clktqncs.us-east-2.rds.amazonaws.com', 
        user:'admin', 
        password: 'admin1234',
        database: 'cadena_restaurantes',
        connectionLimit: 50  
    })

async function getConn(){ //función que asigna una conexión (de las 50 establecidas) a la sesión del usuario
    let conn = await pool.getConnection();
    return conn;
} 

module.exports.getConn = getConn;

