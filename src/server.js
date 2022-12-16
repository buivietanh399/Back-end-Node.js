const express = require('express'); //import
const path = require('path'); //import
require('dotenv').config();


const app = express() //app express
const port = process.env.port || 8000;   //port
const hostname = process.env.HOST_NAME;  //hostname

//config template engine
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');


//config static files
app.use(express.static(path.join(__dirname, 'public')));


// Khai báo route
app.get('/', (req,res) => { 
    res.render('sample');
});
app.listen(port,hostname, () => {
    console.log(`http://${hostname}:${port}`);
})