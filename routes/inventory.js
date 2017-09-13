var router = require('express').Router();
var pool = require('../modules/pool');

// global inventory variable
// var inventory = ['the ring', 'trousers', 'buttons', 'hairy feet'];

// inventory get route
// every get needs a send, a send is a response sent from the server to display data
router.get('/', function (req, res) {
    console.log('in get inventory route');
    pool.connect(function(connectionError, client, done) {
        // connectionError = connection to db error
        // client = worker to ask query of
        // done = function we will call to release client
        if (connectionError){
            console.log(connectionError);
            res.sendStatus(500);
            // 500 = something BLEW UP
        } else {
            // ask the client to run our query
            // param 1 is query itself, 2 is callback
            client.query('SELECT * FROM inventory;', function (queryError, resultObj) {
                if (queryError) {
                    console.log(queryError);
                    res.sendStatus(500);
                } else {
                    console.log('resultsObject ->', resultObj);
                    res.send(resultObj.rows);
                }
            });
        }

    });
//    res.send(inventory);
})

//inventory post route
router.post('/', function (req, res) {
    console.log('in post inventory route', req.body);
    var item = req.body.item;
    inventory.push(item);
    res.sendStatus(200);
})

module.exports = router;