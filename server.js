var express = require('express');
var path = require('path');
var app = express();

// global inventory
var inventory = ['the ring', 'trousers', 'buttons', 'hairy feed'];

app.use(express.static('public'));

// Root get route
app.get('/', function (req, res) {
    var indexPath = (path.join(__dirname, './public/views/index.html'));
    // displays content from joined filename onto current get route page
    res.sendFile(indexPath);
})

// inventory get route
// every get needs a send, a send is a response sent from the server to display data
app.get('/inventory', function (req, res) {
    console.log('in get inventory route');
    res.send(inventory);
})

// Tell server to listen on specific port
app.listen(3000, function(){
    console.log('listening on 3000');
});