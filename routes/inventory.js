var router = require('express').Router()

// global inventory variable
var inventory = ['the ring', 'trousers', 'buttons', 'hairy feet'];

// inventory get route
// every get needs a send, a send is a response sent from the server to display data
router.get('/', function (req, res) {
    console.log('in get inventory route');
    res.send(inventory);
})

//inventory post route
router.post('/', function (req, res) {
    console.log('in post inventory route', req.body);
    var item = req.body.item;
    inventory.push(item);
    res.sendStatus(200);
})

module.exports = router;