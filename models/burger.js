var orm = require('../config/orm');

$('.submit').on('click', function(){

	var burger = $('#burgerInput').val().trim();

	orm.addBurger(burger);

});

$('#devour').on('click', function(){

	var burger = 
	orm.devourBerger(burger)

});