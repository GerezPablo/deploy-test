const express = require('express');
require('dotenv').config();
const cors = require('cors');
const {dbConnection} = require('./database/config');


//Create Server
const app = express();


//Conection to Database
dbConnection();


//CORS
app.use(cors());


//Public Directory
app.use(express.static('public'));


//Body Parsing and reading
app.use( express.json());


//Routers
app.use('/api/auth', require('./routes/auth'));
app.use('/api/img', require('./routes/img'))

//Set the PORT and ready to start listening...
app.listen(process.env.PORT, () => {console.log(`Server listening on port ${process.env.PORT}...`);})