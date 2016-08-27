
// modules =================================================
var express = require('express');
var app = express();

// port for dev environment ================================
var port = process.env.PORT || 8081; 

// set the static files location ===========================
app.use(express.static(__dirname + '/public'));

// start app ===============================================
app.listen(port);
console.log('Head over to port ' + port + ' :)');
