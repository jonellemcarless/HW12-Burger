var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override')
var app = express();

var port = 3000;


// var exphbs = require('express-handlebars');
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

require("./controllers/burgers_controller.js")(app)

app.listen(port);