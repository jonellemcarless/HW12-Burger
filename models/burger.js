var orm = require("../config/orm.js");

var burger = {
	all: function(cb) {
	  orm.selectAll("burgers", function(res) {
		cb(res);
	  });
	},
	// The variables cols and vals are arrays.
	create: function(cols, vals, cb) {
	  orm.insertOne("burgers", cols, vals, function(res) {
		cb(res);
	  });
	},
	update: function(objColVals, condition, cb) {
	  orm.updateOne("burgers", objColVals, condition, function(res) {
		cb(res);
	  });
	}
  };
  
  module.exports = burger;

// $('.submit').on('click', function(){

// 	var burger = $('#burgerInput').val().trim();

// 	orm.addBurger(burger);

// });

// $('#devour').on('click', function(){

// 	var burger = 
// 	orm.devourBerger(burger)

// });