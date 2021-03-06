var express = require('express');

var app = express();

app.get('/', function(req,res){
	res.render('index.ejs', {title : 'Hello World'});
});

app.get('/about', function(req,res){
	res.render('layout.ejs', {title : 'about us', body : '<h1>About Us</h1>'});
});

app.get('/*', function(req,res){
	res.status(404).render('error.ejs', {title : 'Error! Not found'});
});

console.log('Server Started');

app.listen(3000);