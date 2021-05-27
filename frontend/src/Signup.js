import './nivo-lightbox.css';
import './templatemo-style.css';
import React, { Component } from "react";
import Topbar from "./Topbar";
import Footer from "./Footer";
import { useState } from "react";
import axios from "axios";

const Signup = (props) => {

  const [userId, setUserID] = useState("");
  const [pw, setPw] = useState("");
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let data = {
      user: userId,
      pass: pw,
      name:userName,
      age:userAge,
    };
    console.log("posting:", data);
    axios.post("http://localhost:5000/signup", {
        data: data,
      })

      .then((res) => {
        console.log(res);
        if (res.data == "Success") {
          window.location.href = "/AddExpense";
        }
        else{
          document.getElementById("error").innerHTML = "Wrong credentials. Try Again."
          document.getElementById("email").value = ""
          document.getElementById("password").value = ""
        }
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("Dates posted to /login");
  };

  return (
    <body>
      <Topbar />
      <br/> <br/> 
      <div id="team">
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 col-sm-12">
              <h2>Sign Up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
                        <form onSubmit={submitHandler}>
                        <p style={{color:"red",textAlign:"center"}} id="error"></p>
                        <br/>
                        <label>Enter Name</label>
                        <input name="name" id="name" type="text" placeholder="Enter your name" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} /> <br/>
                        <label>Enter Age</label>
                        <input name="age" id="age" type="number" placeholder="Enter your age" className="form-control" value={userAge} onChange={(e) => setUserAge(e.target.value)} /> <br/>
                        <label>Enter Email</label>
                        <input name="email" id="email" type="email" placeholder="Enter your email" className="form-control" value={userId} onChange={(e) => setUserID(e.target.value)} /> <br/>
                        <label>Enter Password</label>
                        <input name="password" id="password" type="password" placeholder="Enter your password" className="form-control" value={pw} onChange={(e) => setPw(e.target.value)} /> <br/>
                        <button type="submit" name="submit" className="btn email">Sign Up</button>
                    </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}


export default Signup;