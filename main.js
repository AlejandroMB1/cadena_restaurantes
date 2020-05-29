const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const conection = require('./Database/queries');
const router = express.Router();
//initialize
const app = express();
dotenv.config();
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
const menu = require('./routes/menu');
const plates = require('./routes/plates');
const users = require('./routes/users');
const tables = require('./routes/tables');
const ingredients = require('./routes/ingredients');

app.use('/menu', menu);
app.use('/plates', plates);
app.use('/users', users);
app.use('/tables', tables);
app.use('/ingredients', ingredients);


app.post('/', function(request, response){
    console.log(request.body);      // your JSON
    response.send("ok");    // echo the result back
});

app.get('/', (req, res) => {
    console.log("GOLA");
    res.send("Server Running!");
});

app.listen(PORT,() => {
    console.log("Server up and running!");
});

