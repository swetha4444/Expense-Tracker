const express = require("express");
var ObjectId = require('mongodb').ObjectID;
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


//Add and View Expense
app.post("/addexpense", function (req, res) {
  console.log("new request: ",req.body.message);
  if(req.body.message === "Get Data"){
    db.collection("expenses").find({ user_id: current_id }).toArray((err,data)=>{
      if (err) throw err;
      console.log(data);
      res.send(data);
    });
  }
  else if(req.body.message === "Add Data"){
    var expenseData = req.body.data;
    console.log(expenseData)
    var data = {
      user_id: current_id,
      reason: expenseData.reason,
      description: expenseData.description,
      expense: parseInt(expenseData.expense),
      date: new Date(expenseData.date),
    };
    console.log("add data")
    db.collection("expenses").insertOne(data, function (err, collection) {
      if (err) throw err;
      console.log(">>USER:",current_id)
      console.log("Expense Record inserted Successfully");
      res.send("Success");
    });
  }
});

//Delete Expense
app.post("/deleteexpense", function (req, res) {
  var deleteID = req.body.data;
  console.log("delete ID:",deleteID);
  db.collection("expenses").deleteOne({_id:ObjectId(deleteID)});
  if (err) throw err;
  console.log(">>USER:",current_id)
  console.log("Expense Record deleted Successfully");
  res.send("Success");
})

//Bar Year
app.post("/baryear", function (req, res) {
  var months = [ "January", "February", "March", "April", "May", "June", 
           "July", "August", "September", "October", "November", "December" ];
  var year = req.body.data;
  console.log("year: ",year);
  console.log(">>USER:",current_id)
  var labels = [];
  var data = [];
  const gte = String(year)+"-01-01T00:00:00.000Z";
  const lt = String(year+1)+"-01-01T00:00:00.000Z";
  console.log(gte,lt);
  db.collection('expenses').find({
    "date": {
        $gte: new Date(gte),
        $lt: new Date(lt),
    },"user_id":current_id
  },{$orderby: { date : 1 }}).toArray((err,result)=>{
    console.log("result: ",result);
    var i;
    if (result.length === 0)
    {
      res.send("No Results");
    }
    else
    {
      var labels_aggr = [];
      var data_aggr = []
      for (i = 0 ;i<result.length;i++)
      {
        labels.push(result[i].date.getMonth());
        data.push(result[i].expense);
      }

      i = 0;
      var aggr = 0;
      while (i < labels.length)
      {
        var init = labels[i];
        labels_aggr.push(months[init]);
        while(labels[i] === init)
        {
         aggr += data[i];
         i++; 
        }
        data_aggr.push(aggr);
        aggr = 0;
      }
    }

    const state ={
      labels: labels_aggr,
      datasets: [
        {
          label: 'Net Expenses for each month of the year',
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: data_aggr
        }
      ]
    }
    res.send(state);
  }); 
})


//PieCategory
app.post("/piecategory", function (req, res) {
  console.log("new request:",req.body.data);
  console.log(">>USER:",current_id)
  const categories = ["Shopping","Gift","Property","Travel","Particulars","Other"];
  var count = [0,0,0,0,0,0];

  db.collection("expenses").find({ user_id: current_id }).toArray((err,result)=>{
    if (err) throw err;
    console.log(result);
    for(var i = 0; i < result.length; i++)
    {
      for(var j = 0; j < result.length; j++)
      {
        if (result[i].reason === categories[j])
        {
          count[j] += 1;
        }
      }  
    }

    const state = {
      labels: categories,
      datasets: [
        {
          label: 'Rainfall',
          backgroundColor: [
            '#B21F00',
            '#C9DE00',
            '#2FDE00',
            '#00A6B4',
            '#6800B4',
            '#f0f4f5'
          ],
          hoverBackgroundColor: [
          '#501800',
          '#4B5000',
          '#175000',
          '#003350',
          '#35014F',
          '#a7aaab'
          ],
          data: count
        }
      ]
    }

    res.send(state);
  });
})

