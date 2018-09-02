// importing require packages 
var express = require("express");
var bodyParser = require("body-parser");
var routes = require("./routes/routes.js");
var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// routes file basis on requested url
routes(app);

// server run on port 3000
app.listen(process.env.PORT || 3000, () => console.log('All is ok'))
	
