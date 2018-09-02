var util = require('../utils/communicate_with_db.js');


var appRouter = function(app){
	
	app.get("/", function(req, res){
		res.sendfile('./routes/public/index.html');
	});
	app.get("/:IFSC", function(req, res){
		var code = req.param('IFSC');
		util.bankDetailsWithIFSC(code, function(data, callback){
			res.send(JSON.stringify(data));
		})
	});
	app.get("/:bank_name/:city_name", function(req, res){
		var data = {'bank_name': req.param('bank_name'), 'city': req.param('city_name')};
		util.bankDetailsByNameCity(data, function(data, callback){
			res.send(JSON.stringify(data));
		});
	});
}

module.exports = appRouter;