const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
var current_id;

app.use(bodyParser.json());
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(5000, (req, res) => {
  console.log("Server listening on port 5000");
});


//Connect to database
const mongoose = require("mongoose");

mongoose.connect(
  'mongodb://localhost:27017/ExpenseTracker',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  }
);

var db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("connection succeeded");
});


// Login
app.post("/login", function (req, res) {
  console.log("In login page");
  var loginData = req.body.data;
  console.log(loginData.user)
  db.collection("users").findOne({email: loginData.user }, function (err, document) {
    if (document !== null) {
      if (loginData.pass === document.password) {
        res.send(document);
        current_id = document.id;
        console.log(">>USER:",current_id);
      }
      else{
        console.log("Wrong creds");
        res.send("Wrong");
      }
    }
    else{
      console.log("Wrong creds");
      res.send("Wrong");
    }
  });
});

// Sign Up
app.post("/signup", function (req, res) {
  var loginData = req.body.data;
  db.collection("users").countDocuments((err,count)=>{
    var data = {
      id:count+1,
      email: loginData.user,
      password: loginData.pass,
      name: loginData.name,
      age: parseInt(loginData.age)
    };
    db.collection("users").insertOne(data, function (err, collection) {
      if (err) throw err;
      current_id = data.id
      console.log(">>USER:",current_id)
      console.log("Record inserted Successfully");
      res.send("Success");
    });
  });
});
