// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll("heroku_d71186c4e54591c", function(res) {
      cb(res);
    });
  },
  // The constiables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("heroku_d71186c4e54591c", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("heroku_d71186c4e54591c", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;