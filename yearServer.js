var express = require('express');
var app = express();
var port = 5000;

// static

app.get('/yearServer', function( req, res) {
  res.sendfile('./templates/yearServer.html');
});
app.get('/showYear.js', function( req, res) {
  res.sendfile('./templates/showYear.js');
});



app.listen(port, function() {
  console.log('listening on port ', port);
});