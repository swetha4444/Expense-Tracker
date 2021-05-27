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
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="divider-wrapper divider-two">
                <i className="fa fa-mobile"></i>
                <h2>Easy to use</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
              </div>
            </div>
            <div className="col-md-4 col-sm-12">
              <div className="divider-wrapper divider-three">
                <i className="fa fa-life-ring"></i>
                <h2>Quick Support</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
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
              <h2>Startup Business</h2>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
              <a href="/about" className="btn btn-default">LEARN MORE</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </body>
  );
}
