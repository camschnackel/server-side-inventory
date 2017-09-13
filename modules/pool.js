// One pool per project
// pg is the node module we need to create "Pool" functionality
var Pool = require('pg').Pool; // Pool must be capitalized

var config = {
    host: 'localhost', // where does the db server live
    port: 5432, // what port is it listening on, 5432 is default
    database: 'canopus-inventory',
    max: 20 // number of clients in pool, default is 10
};

// pool is an instance of a pool that knows our configuration
var pool = new Pool(config);
module.exports = pool;