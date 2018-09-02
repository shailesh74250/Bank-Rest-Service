var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

routes(app);
/*app.get("/", function(req, res){
		console.log("hello world hi");
	});*/

var server = app.listen(process.env.PORT || 8080, () => console.log('All isok'))
	
