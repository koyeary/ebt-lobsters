const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "us-cdbr-east-02.cleardb.com",
  port: 3306,
  user: "bb4d2e70a154e1",
  password: "84f229b1",
  database: "2998f7ef34ab971"
});
const del = connection._protocol._delegateError;
connection._protocol._delegateError = function(err, sequence){
  if (err.fatal) {
    console.trace('fatal error: ' + err.message);
  }
  return del.call(this, err, sequence);
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
