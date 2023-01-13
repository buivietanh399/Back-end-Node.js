require('dotenv').config();
const express = require('express'); //import
const mongoose = require("mongoose");
const connection = require('./config/database');
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');
const apiRoutes = require('./routes/api');
const fileUpload = require('express-fileupload');




const app = express() //app express
const port = process.env.PORT || 8081;   //port
const hostname = process.env.HOST_NAME;  //hostname

//config file upload
app.use(fileUpload());

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies

//config template engine
configViewEngine(app);

//khai bao route
app.use('/', webRoutes);
app.use('/v1/api/', apiRoutes);


//create shape data





// test connection
(async () => {
    try {
        await connection() ;
        app.listen(port,hostname, () => {
            console.log(`http://${hostname}:${port}`);
        })
    }

    catch (error) {
        console.log('>> Catching error DB: ', error);
    }

})  ()

