const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const morgan = require('morgan');
const router = express.Router();
//initialize
const app = express();

app.use(express.json());
app.set('json spaces', 2);// Ojo con esto para conexion con front

const {
    PORT = 5020,
} = process.env;

//middlewares for differents task, ie. print on console like debugging
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use(helmet());

//Routes
const menu = require('./api/routes/menu');
const plates = require('./api/routes/plates');
const users = require('./api/routes/users');
const pedidos = require('./api/routes/pedido');
//const ingredients = require('./api/routes/ingredients');
const bills = require('./api/routes/bill');

app.use('/menu', menu);
app.use('/plates', plates);
app.use('/users', users);
app.use('/pedidos', pedidos);
//app.use('/ingredients', ingredients);
app.use('/bills', bills);

app.listen(PORT,() => {
    console.log("Server up and running!");
});
