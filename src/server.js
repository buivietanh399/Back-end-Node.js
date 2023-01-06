require('dotenv').config();
const express = require('express'); //import
const configViewEngine = require('./config/viewEngine');
const webRoutes = require('./routes/web');



const app = express() //app express
const port = process.env.PORT || 8001;   //port
const hostname = process.env.HOST_NAME;  //hostname

//config req.body
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies

//config template engine
configViewEngine(app);

//khai bao route
app.use('/', webRoutes);

//test connection
  

app.listen(port,hostname, () => {
    console.log(`http://${hostname}:${port}`);
})