import React, { Component } from "react";
import {Line} from 'react-chartjs-2';
import axios from "axios";
import DashTopbar from "../DashTopbar";
import ChartNav from "../ChartNav";
import Footer from '../Footer';

export default class LineYear extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            lineState : {}
        }
        this.handleChange = this.handleChange.bind(this);
    }

    
    handleChange(e) {
        document.getElementById("lineButton").style.display="none";
        document.getElementById("lineheading").innerHTML="Trend in Spendings over years";
        axios.post("http://localhost:5000/lineyear", {
          data: "Line Request",
        })
        .then((res) => {
            console.log(res);
            if(res === "No Results")
            {
                document.getElementById("lineheading").innerHTML="Try Again."; 
            }
            else
            {
                this.setState({ lineState: res })
                console.log("linestate: ",this.state.lineState)
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
              <h2>Trend in your spendings over the years</h2>
              <p>Contemporary measures of consumer spending include all private purchases of durable goods, nondurable goods, and services. Consumer spending can be regarded as complementary to personal saving, investment spending, and production in an economy.</p>
              <div>
                <br />
                <p style={{color:"rgba(75,192,192,1)",fontSize:"large",textAlign:"center",fontWeight:"bold"}} id="lineheading"></p>
                <button id="lineButton" onClick={this.handleChange} style={{display:"block"}} className="btn btn-default">Click to view annual spending trend</button>
                <Line
                    data={this.state.lineState.data}
                    options={{
                        title:{
                        display:true,
                        text:'Trend in Spendings',
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


            