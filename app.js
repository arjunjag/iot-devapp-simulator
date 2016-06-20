var express = require('express');

var app = express();

var port = 5000;
var https = require('https');

app.use(express.static('public'));
app.use(express.static('src/views'));
app.get('/', function (req, resp) {

    resp.send("Hello world");
});

app.get('/haw', function (req, resp) {
    resp.send("Hello Another World!");
});

app.listen(port, function (succ, err) {
    console.log("server running on " + port);

});
