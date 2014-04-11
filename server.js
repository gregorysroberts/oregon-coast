var express = require('express');

var request = require("request");

var bodyParser = require('body-parser');

var app = express();

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
	app.use(bodyParser());
	app.use(function(req, res, next){
		res.setHeader('Access-Control-Allow-Origin', '*');
		res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST');
		res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-with, Content-Type, Accept, lat, lng');
		res.type('application/json');
		next();
	})
};

app.get('/instagram', function(req, res) {
	console.log("api request");
	request("https://api.instagram.com/v1/media/search?lat=" + req.param('lat') + "&lng=" + req.param('lng') + "&client_id=0a9cfb02cb1b4cd2899d4fa6a9c00c19&distance=150", function(error, response, body) {
  		res.json(JSON.parse(body));
	});
});

app.listen(80);