var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static('Public'));

http.listen(3000, function() {
    console.log('Express aplication started');
});

