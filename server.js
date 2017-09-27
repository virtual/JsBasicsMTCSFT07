var express = require("express");
var bodyParser = require('body-parser');
var mongoose = require("mongoose");
var uriUtility = require('mongodb-uri');
var Names = require('./models/names'); // works without .js

var mongodbUri = 'mongodb://localhost/names'; // connects to localhost db
var mongooseUri = uriUtility.formatMongoose(mongodbUri);

var options = {
  server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000}},
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000}}
};
mongoose.connect(mongodbUri, options);

var app = express();
app.use(bodyParser.json({
  type: 'application/json'
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  next();
});
var allOurNames = ['Tate', 'Moby', 'Burger'];

/* serves main page */
app.get("/", function (req, res) {
  res.sendfile('./public/table.html');
});


app.get("/names", function (req, res) {
  // res json 
  //res.json(allOurNames);
  Names.find(function(err, names){
    res.json(names);
  });
});
 
app.post("/names", function(req, res) {
  //console.log(req.body.name);
  //allOurNames.push(req.body.name);
  var name = new Names();
  name.name  = req.body.name;
  name.save(function(err, nameReturned) {
    res.json("name received " + nameReturned);
  });
});

app.get("/speak/:animal", function (req, res) {
  var animal = req.params.animal.toLowerCase();
  var sounds = {
    pig: 'Oink!',
    cow: 'Moo!',
    dog: 'Woof woof!'
  };
  res.send('the ' + animal + ' says "' + sounds[animal] + '"');
});


app.get("/repeat/:word/:multi", function (req, res) {
  // res json
  var word = req.params.word,
    multi = req.params.multi;
  var str = '';
  for (var i = 0; i < multi; i++) {
    str += word;
    if (i !== multi - 1) {
      str += " ";
    }
  }
  res.send(str);
});


app.get("*", function(req, res) {
  res.send("no bueno");
});

var port = process.env.PORT || 5000;
app.listen(port, function () {
  console.log("Listening on " + port);
});