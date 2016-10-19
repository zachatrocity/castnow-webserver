var express = require("express");
var app     = express();

var bodyParser = require('body-parser')
app.use(bodyParser.json())

//set the working dir for the system service
//https://github.com/coreybutler/node-windows/issues/36
process.chdir(__dirname);

app.use('/static', express.static('static'));

app.use(require('./api'));

app.get('/',function(req,res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(8080);

console.log("Running at Port 8080");