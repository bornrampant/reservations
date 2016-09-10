// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var PORT = 3000;

var tables = [

	{
		name: "bill",
		email: "Bill.Smith@gmail.com",
		partyOf: 9,
		phoneNumber: "407-888-8888"
	},

	{
		name: "sue",
		email: "sue.miller@gmail.com",
		partyOf: 2,
		phoneNumber: 1200
	},

	{
		name: "nick",
		email: "nick.johnson@gmail.com",
		partyOf: 5,
		phoneNumber: 1350
	}
]


app.post('/api/new', function(req, res){

	var newTable = req.body;
	newTable.name=newTable.email.replace(/\s+/g,'').toLowerCase()
	
	console.log(newTable);
	tables.push(newTable)
	console.log(tables);
	res.json(newTable);

		
	};