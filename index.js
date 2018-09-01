var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

routes(app);
/*app.get("/", function(req, res){
		console.log("hello world");
		app.use(express.static('./routes/public'))
	});
*/
var server = app.listen(8080, function(){
	console.log("app running on port:", server.address().port);
});
