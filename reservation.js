// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3200;
console.log("you are connected to: " + PORT)
var tables = [

	{
		routeName: "bill",
		name: "Bill Smith",
		partyOf: 9,
		reservationTime: 2000
	},

	{
		routeName: "sue",
		name: "Sue Morgan",
		partyOf: 2,
		reservationTime: 1200
	},

	{
		routeName: "nick",
		name: "Nicky Jamz",
		partyOf: 5,
		reservationTime: 1350
	}
]


app.post('/api/new', function(req, res){

	var newTable = req.body;
	newTable.routeName=newTable.name.replace(/\s+/g,'').toLowerCase()
	
	console.log(newTable);
	tables.push(newTable)
	console.log(tables);
	res.json(newTable);

		
	};