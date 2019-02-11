var con = require('./connection');


var orm = {
    addBurger: function(burger, callback) {
    	var time = Math.floor(Date.now() / 1000);

        var s = "INSERT INTO burgers (BurgerName, Devour) VALUES (" + burger + ", 0);";

        con.query(s, function(err, result) {
 
            console.log("orm: " + result + " time: " + time);
            callback(result);
        });
    },

    devourBerger: function(BurgerName, callback) {	
        var s = "DELETE FROM `burgerdb`.`burgers` WHERE BurgerName=" + BurgerName + ";";
        con.query(s, function(err, result) {
  
            console.log(result);
            callback(result);
        });
    }
};


module.exports = orm;