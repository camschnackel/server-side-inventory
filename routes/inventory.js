var path = require('path');
var router = require('express').Router()

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