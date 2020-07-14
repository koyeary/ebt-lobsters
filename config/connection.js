const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "e11wl4mksauxgu1w.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "ffsj06861v9ys788",
  password: "yejq6tk7veq707i0",
  database: "igkbrpw7vdlwqaar"
});

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
