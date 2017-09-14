var router = require('express').Router();
var pool = require('../modules/pool');

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
                done(); // releases the client
                if (queryError) {
                    console.log(queryError);
                    res.sendStatus(500);
                } else {
                    console.log('resultsObject ->', resultObj.rows);
                    res.send(resultObj.rows);
                }
            });
        }

    });
})

//inventory post route
router.post('/', function (req, res) {
    var clientItem = req.body.item;
    console.log('in post inventory route', clientItem);

    pool.connect(function (connectionError, client, done) {
        if (connectionError) {
            console.log(connectionError);
            res.sendStatus(500);
            // 500 = something BLEW UP
        } else {
            var queryString = 'INSERT INTO inventory (item) VALUES ($1);';
            var values = [clientItem];
            client.query(queryString, values, function (queryError, resultObj) {
            // CONCATINATING VARIABLES IS UNSAFE, use paramterized queries!
            // query string
            // values to insert into query
            // callback function to run when query is complete
            done();
            if(queryError){
                console.log(connectionError);
                res.sendStatus(500);
            } else {
                res.sendStatus(201);
            }
            })
        }
    })

})

// route params
router.delete('/:id', function (req, res) {
    console.log('in delete inventory route');
    console.log('req.params ->', req.params);
    console.log('req.params.id ->', req.params.id);
    
    res.sendStatus(200);
})

module.exports = router;