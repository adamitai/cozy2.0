var express = require('express');
var router = express.Router();
var path = require('path');
var request = require('request')
var agent = null;

/* GET home page. */
router.get('/', function(req, res, next) {
    update_agent();
    res.render('mobile', { title: 'Express' ,cur_agent: agent});
    //res.sendfile(path.resolve('../public/mobile.html'));

});

function update_agent(){
    var url = "http://localhost:8888/api/agents";
    request({
        url: url,
        json: true
    }, function (error, response, body) {

        if (!error && response.statusCode === 200) {
            console.log(body) // Print the json response
            agent = body[0];
        }
    })
}
module.exports = router;
