const express = require('express') //import
const path = require('path') //import
const app = express() //app express
const port = 3000  //port
const hostname = "localhost"

//config template engine
app.set('views', path.join(__dirname,'views'))
app.set('view engine', 'ejs')

// Khai báo route
app.get('/', (req,res) => { 
    res.render('sample');
});
app.listen(port,hostname, () => {
    console.log(`http://${hostname}:${port}`);
})