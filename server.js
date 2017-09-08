var express = require('express');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');

var app = express();

// global inventory variable
var inventory = ['the ring', 'trousers', 'buttons', 'hairy feed'];

// middleware, which means it's going to do something to the request between req received and req fulfilled
// will attempt to parse body of every request
app.use(bodyParser.urlencoded({extended: true}));

// this serves all other client side files
// client.js, jquery, css
app.use(express.static('public'));

// Routes
app.use('/', indexRouter);

// inventory get route
// every get needs a send, a send is a response sent from the server to display data
app.get('/inventory', function (req, res) {
    console.log('in get inventory route');
    res.send(inventory);
})

//inventory post route
app.post('/inventory', function (req, res) {
    console.log('in post inventory route', req.body);
    var item = req.body.item;
    inventory.push(item);
    res.sendStatus(200);
})

// Tell server to listen on specific port
app.listen(3000, function(){
    console.log('listening on 3000');
});