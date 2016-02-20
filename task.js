var express = require('express');
var router = express.Router();
var path = require('path');
var nameArray = [];

//router.get('/', function(req, res) {
//    res.send({message: 'hello'});
//});

router.post('/', function(req, res) {
    nameArray.push(req.body);
    console.log(req.body);
    res.send(nameArray);
});

module.exports.router = router; // module.exports = {'router' : router}
module.exports.nameArray = nameArray;