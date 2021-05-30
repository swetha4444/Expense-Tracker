import React, { Component } from "react";
import {Pie} from 'react-chartjs-2';
import axios from "axios";
import DashTopbar from "../DashTopbar";
import ChartNav from "../ChartNav";
import Footer from '../Footer';

export default class PieCategory extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            pieState : {}
        }
        this.handleChange = this.handleChange.bind(this);
    }

    
    handleChange(e) {
        document.getElementById("pieButton").style.display="none";
        document.getElementById("pieCanvas").style.display="block";
        document.getElementById("pieheading").innerHTML="Over all Spendings";
        axios.post("http://localhost:5000/piecategory", {
          data: "Pie Request",
        })
        .then((res) => {
            console.log(res);
            if(res === "No Results")
            {
                document.getElementById("pieheading").innerHTML="No Expenses."; 
            }
            else
            {
                this.setState({ pieState: res })
                console.log("piestate: ",this.state.pieState)
            }
        })

    }

    render(){
        return(
            <body>
      <DashTopbar />
      <br/><br/>
      <ChartNav />
      <div id="team">
	    <div className="container">
        <div className="row">
            <div className="col-md-offset-2 col-md-8 col-sm-12">
              <h2>Categorize Spendings</h2>
              <p>While there are several choices available to manage household finances, the way you categorize personal expenses makes a difference. In essence, a simple system is more reliable.</p>
              <div>
                <br />
                <p style={{color:"rgba(75,192,192,1)",fontSize:"large",textAlign:"center",fontWeight:"bold"}} id="pieheading"></p>
                <button id="pieButton" onClick={this.handleChange} style={{display:"block"}} className="btn btn-default">Click to categorise your overall spendings</button>
                <Pie id="pieCanvas" style={{display:"none"}}
                    data={this.state.pieState.data}
                    options={{
                        title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                        },
                        outerRadius: 50,
                        legend:{
                        display:true,
                        position:'right'
                        }
                    }}
                />
                </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
        );
    }
}




