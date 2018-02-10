// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

// This code calls the ORM functions using burger specific input for the ORM.
var burger = {
	//This function selects all the entries on the database
	all: function(cb) {
		orm.all("burgers", function(res) {
			cb(res);
		});
	},
	//This function creates (inserts) one new entry into the database
	// The variables cols and vals are arrays.
	create: function(cols, vals, cb) {
		orm.create("burgers", cols, vals, function(res) {
			cb(res);
		});
	},

	update: function(objColVals, condition, cb) {
		orm.update("burgers", objColVals, condition, function(res) {
			cb(res);
		});
	}
}; //End of var burger

// Export the database functions for the controller (burgerController.js).
module.exports = burger;