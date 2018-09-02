var url = 'mongodb://shaileshmourya:Kumar7425@ds241012.mlab.com:41012/bank_details';
// for local host mongodb
//var url = 'mongodb://127.0.0.1:27017';
var MongoClient = require('mongodb').MongoClient;

function bankDetailsWithIFSC(code, callback){
	var data = {};
	MongoClient.connect(url, function(err, db){
		if (err) throw err;
		var dbo = db.db('bank_details');
		var query = { ifsc: code};
		dbo.collection('bank_branches').find(query).toArray(function(err, result){
			if (err) throw err;
			callback(result);
			db.close();
		});
	});
}

function bankDetailsByNameCity(data, callback){
	MongoClient.connect(url, function(err, db){
		if (err) throw err;
		var dbo = db.db('bank_details');
		console.log(data);
		var query = data;
		dbo.collection('bank_branches').find(query).toArray(function(err, result){
			if (err) throw err;
			callback(result);
			db.close();
		});
	});
}

exports.bankDetailsWithIFSC = bankDetailsWithIFSC;
exports.bankDetailsByNameCity = bankDetailsByNameCity;