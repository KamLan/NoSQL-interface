var mongojs = require('mongojs')
var connectionString = "localhost:32768/music";
var collections = "albums";
var db = mongojs(connectionString, [collections])
 
db.on('connect', function () {
    console.log('database connected')
})

//var request = db.collection('albums').find();
var request2 = db.mycollection.find(function (err, docs)
