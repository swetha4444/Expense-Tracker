import './nivo-lightbox.css';
import './templatemo-style.css';
import React, { Component } from "react";
import DashTopbar from "./DashTopbar";
import ChartNav from "./ChartNav";
import Footer from './Footer';

export default function Dashboard() {

  return (
    <body>
      <DashTopbar />
      <br/><br/>
      <ChartNav />
      <div id="team">
	    <div className="container">
        <div className="row">
            <div className="col-md-offset-2 col-md-8 col-sm-12">
              <h2>Dashboard</h2>
              <p>A critical advantage to using value analysis is its potential for reducing costs, which is a benefit that permeates all advantages of the system. Because value analysis breaks down a product or service into components, it enables you to analyze each component on its own, evaluating its importance and efficiency.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}
