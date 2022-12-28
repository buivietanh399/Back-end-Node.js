require('dotenv').config();
const express = require('express'); //import
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');


const app = express() //app express
const port = process.env.port || 8001;   //port
const hostname = process.env.HOST_NAME;  //hostname

//config template engine
configViewEngine(app);

//khai bao route
app.use('/', webRoutes);

app.listen(port,hostname, () => {
    console.log(`http://${hostname}:${port}`);
})