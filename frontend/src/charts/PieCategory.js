import React, { Component } from "react";
import {Pie} from 'react-chartjs-2';
import axios from "axios";

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
        document.getElementById("pieCanvas").style.display="block";
        document.getElementById("barCanvas").style.display="none";
        document.getElementById("barheading").innerHTML="";
        document.getElementById("pieheading").innerHTML="Over all Spendings";
        axios.post("http://localhost:5000/piecategory", {
          data: "Pie Request",
        })
        .then((res) => {
            console.log(res);
            if(res == "No Results")
            {
                document.getElementById("pieheading").innerHTML="No Expenses."; 
            }
            else
            {
                this.setState({ pieState: res })
                console.log("piestate: ",this.state.barState)
            }
        })

    }

    render(){
        return(
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
        );
    }
}
