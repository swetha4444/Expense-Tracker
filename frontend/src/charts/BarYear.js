import React, { Component } from "react";
import {Bar} from 'react-chartjs-2';
import axios from "axios";
import DashTopbar from "../DashTopbar";
import ChartNav from "../ChartNav";
import Footer from '../Footer';


export default class BarYear extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            barState : {}
        }
        this.handleChange = this.handleChange.bind(this);
    }

    
    handleChange(e) {
        var year;
        document.getElementById("barCanvas").style.display="block";
        if (e.target.value === "null")
        {
            document.getElementById("barheading").innerHTML="Current Year Expenses";
            year = 2021;
        }
        else
        {
            document.getElementById("barheading").innerHTML="Expenses for the year "+e.target.value;
            year = parseInt(e.target.value);
        }
        console.log(year," sent to /baryear");
        axios.post("http://localhost:5000/baryear", {
          data: year,
        })
        .then((res) => {
            console.log(res);
            if(res === "No Results")
            {
                document.getElementById("barheading").innerHTML="No Expenses on this year."; 
            }
            else
            {
                this.setState({ barState: res })
                console.log("barstate: ",this.state.barState)
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
              <h2>Year Wise Spendings</h2>
              <p>An annual budget is a plan for a company's projected expenditures over the course of a year. Annual budgets act as benchmarks against which an individual or company can measure progress and as tools to help better manage money.</p>
              <div>
                <br />
                <div class="select">
                    <select name="year" onChange={this.handleChange}>
                        <option value="null">--Select a year to view expenses--</option>
                        <option value="2021">2021</option>
                        <option value="2020">2020</option>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                        <option value="2015">2015</option>
                </select>
                </div>
                <p style={{color:"rgba(75,192,192,1)",fontSize:"large",textAlign:"center",fontWeight:"bold"}} id="barheading"></p>
                <Bar id="barCanvas" style={{display:"none"}}
                    data={this.state.barState.data}
                    options={{
                        title:{
                        display:true,
                        text:'Average Rainfall per month',
                        fontSize:20
                        },
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


