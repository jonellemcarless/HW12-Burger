var express = require('express');
// var router = require('');
var burger = require('../models/burger.js');
var app = express();
var orm = require('../config/orm.js');
var path 		= require('path');


// Routes
// =============================================================
module.exports = function(app){

	app.get('/index', function(req, res){
		res.sendFile(path.join(__dirname + '/../views/burgers.html'));
	});

	app.post('/index', function(req, res){
		var burgerName = res.body;
		orm.addBurger(burgerName, function(data){
		});
	});

	app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../views/burgers.html'));
	});

}
