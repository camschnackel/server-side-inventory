var express = require('express');
var app = express();

// global inventory
var inventory = ['the ring', 'trousers', 'buttons', 'hairy feed'];

//
app.get('/inventory', function (req, res) {
    console.log('in get inventory route');
    res.send(inventory);
})

// Tell server to listen on specific port
app.listen(3000, function(){
    console.log('listening on 3000');
});