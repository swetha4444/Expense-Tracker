import './nivo-lightbox.css';
import './templatemo-style.css';
import React, { Component } from "react";
import DashTopbar from "./DashTopbar";
import Footer from "./Footer";
import { useState} from "react";
import axios from "axios";
import uuid from 'react-uuid';

export default function AddExpense() {

  const [expenses, setExpenses] = useState([]);
  const [reason, setReason] = useState("");
  const [description, setDescription] = useState("");
  const [expense, setExpense] = useState("");
  const [date, setDate] = useState("");

  
  const handleAddClick = (e) => {
    e.preventDefault();
    let data = {
      reason: reason,
      description: description,
      expense: expense,
      date: date,
    };
    console.log(data," sent to /addexpense");
    axios.post("http://localhost:5000/addexpense", {
          message: "Add Data",
          data: data,
    })
    .then((res) => {
      console.log(res);
      if (res.data == "Success") {
        document.getElementById("success").innerHTML = "Added Sucessfully."
      }
      else{
        document.getElementById("error").innerHTML = "Try Again."
      }
      setReason("");
      setDescription("");
      setExpense("");
      setDate("");
      handleViewClick();
    })
    .catch((err) => {
      console.log(err);
    });

  }

  const handleDeleteClick = (_id) => {
    let id = _id;
    document.getElementById("delete").innerHTML = "Deleted Sucessfully."
    console.log(id," sent to /deleteexpense");
    axios.post("http://localhost:5000/deleteexpense", {
          data: id,
    })
    .then((res) => {
      console.log(res);
      if (res.data == "Success") {
        document.getElementById("success").innerHTML = "Deleted Sucessfully."
      }
      else{
        document.getElementById("error").innerHTML = "Try Again."
      }
      handleViewClick();
    })

  }

  const handleViewClick = () => {
    document.getElementById("delete").innerHTML = ""
    axios.post("http://localhost:5000/addexpense", {
          message: "Get Data",
    })
    .then((res) => {
      console.log(res.data);
      setExpenses(res.data);
      document.getElementById("viewButton").innerHTML = "Refresh View";
      document.getElementById("expenseTable").style.display = "block";
    })
    .catch((err) => {
      console.log(err);
    });
  }

  return (
    <body>
      <DashTopbar />
      <div id="team">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 col-sm-12">
              <h2>Add Expense</h2>
              <p>Organize your money so that you save for an emergency fund, and to cut out big expenses like credit card debt and student loans</p>
              <p>After deleting, press the <em style={{color:"yellow"}}>`Refresh View`</em> button to view the changes.</p>
              <button onClick={handleViewClick} className="btn email" id="viewButton" style={{display:"block"}}>View Expenses</button> <br />
              <p style={{color:"green",textAlign:"center"}} id="delete"></p>
              <table id="expenseTable" className="darkTable" style={{ display: "none" }}>
                <thead> 
                  <tr>
                    <th>Reason</th>
                    <th>Description</th>
                    <th>Expense</th>
                    <th style={{backgroundColor:"#101010",border:"none"}}></th>
                  </tr>
                </thead> 
                <tbody>
                  {
                    expenses.map((expense) => (
                      <tr key={uuid()}>
                        <td className="highlight">{expense.reason}</td>
                        <td className="highlight">{expense.description}</td>
                        <td className="highlight">{expense.expense}</td>
                        <td style={{border:"none"}}><button style={{backgroundColor:"#101010",border:"none"}}  onClick={()=>handleDeleteClick(expense._id)}><i class="fa fa-trash-o fa-2x"></i></button></td>
                        
                      </tr>
                  ))
                  }
                </tbody>
              </table>
              <br /> <br />
              <p style={{color:"green",textAlign:"center"}} id="success"></p>
              <p style={{color:"red",textAlign:"center"}} id="error"></p>
              <form onSubmit={handleAddClick}>
                <label>Enter Reason</label>
                <input name="reason" id="reason" type="text" placeholder="Enter Reason" className="form-control" value={reason} onChange={(e) => setReason(e.target.value)} required/> <br/>
                <label>Enter Description</label>
                <input name="description" id="description" type="textbox" placeholder="Enter Description" className="form-control" value={description} onChange={(e) => setDescription(e.target.value)}/> <br/>
                <label>Enter Expense</label>
                <input name="expense" id="expense" type="number" placeholder="Enter Expense" className="form-control" value={expense} onChange={(e) => setExpense(e.target.value)} required/> <br/>
                <label>Enter Date</label>
                <input name="date" id="date" type="date" placeholder="Enter Date" className="form-control" value={date} onChange={(e) => setDate(e.target.value)} required/> <br/>
                <button type="submit" name="submit" className="btn email">Add Expense</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}
