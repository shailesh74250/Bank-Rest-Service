var util = require('../utils/communicate_with_db.js');


var appRouter = function(app){
	
	app.get("/:IFSC", function(req, res){
		console.log("request came");
		var code = req.param('IFSC');
		util.bankDetailsWithIS(code, function(data, callback){
			console.log("data fetch");
			console.log(data);
			res.send(JSON.stringify(data));
		})
	});
	app.get("/:bank_name/:city_name", function(req, res){
		console.log("inside bank_name");
		var data = {'bank_name': req.param('bank_name'), 'city': req.param('city_name')};
		console.log(data);
		util.bankDetailsByNameCity(data, function(data, callback){
			console.log('data fetched using name and city');
			console.log(data);
			res.send(JSON.stringify(data));
		});
	})
}

module.exports = appRouter;