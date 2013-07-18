var express = require('express');
var fs = require('fs');
var infile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var f = fs.readFileSync(infile, 'utf-8');
  response.send(f);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});