import './nivo-lightbox.css';
import './templatemo-style.css';
import logo from './about-img.jpg';
import React, { Component } from "react";
import Topbar from "./Topbar";
import Footer from "./Footer";

export default function Home() {
  return (
    <body>
      <Topbar />
        <br/> <br/> <br/> <br/> <br/> <br/>
      <div className="divider">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="divider-wrapper divider-one">
                <i className="fa fa-laptop"></i>
                <h2>Responsive</h2>
                <p>Helps you track your financial activity efficiently <br/><br/></p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="divider-wrapper divider-two">
                <i className="fa fa-mobile"></i>
                <h2>Easy to use</h2>
                <p>Simple design makes it lightweight, straightforward and very easy to use <br/><br/></p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="divider-wrapper divider-three">
                <i className="fa fa-life-ring"></i>
                <h2>Quick Support</h2>
                <p> You need just a few minutes everyday to save the amount and each spending purpose</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about">        
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-12">
            <img src={logo} class="img-responsive" alt="about img" />
            </div>
            <div className="col-md-6 col-sm-12 about-des">
              <h2>Expense Tracker</h2>
              <p>The importance of saving money is simple: If you have cash set aside for emergencies, you have a fallback should something unexpected happen. And, if you have savings set aside for discretionary expenses, you may be able to take risks or try new things.</p>
              <p>This application is built to support this idea and to be your <em style={{color:"yellowgreen"}}>'pocket friendly'</em> companion!</p>
              <a href="/about" className="btn btn-default">LEARN MORE</a>
            </div>
          </div>
        </div>
      </div>
      <br/> <br/>
      <Footer />
    </body>
  );
}
