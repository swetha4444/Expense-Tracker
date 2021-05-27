const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const mysql = require("mysql");
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//SQL connection
const con = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "mysql",
  database: "expensetracker_db",
});

con.connect(function (err) {
    if (err) {
      console.error("Error connecting: " + err.stack);
      return;
    }
    console.log("Connected as ID " + con.threadId);
});

app.listen(5000, (req, res) => {
    console.log("Server listening on port 5000");
});

var current_id;

app.post("/login", (req, res) => {
    loginData = req.body.data;
    let query =
      "SELECT id from users where email='" +
      loginData.user +
      "' AND password = '" +
      loginData.pass +
      "';";
    userID = loginData.user;
    console.log(query);
  
    con.query(query, function (error, results) {
      if (error) throw error;
      console.log(results);
      var string=JSON.stringify(results);
      var json =  JSON.parse(string);
      current_id = json[0].id;
      console.log('>> user id: ',current_id);
      res.send(results);
    });
});


