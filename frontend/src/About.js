import './nivo-lightbox.css';
import './templatemo-style.css';
import React, { Component } from "react";
import Topbar from "./Topbar";
import Footer from "./Footer";

export default function About() {
  return (
    <body>
	  <Topbar />
      <br/> <br/> <br/> <br/> <br/> <br/>
      <div id="team">
	    <div className="container">
    
		<div className="row">
			<div className="col-md-offset-2 col-md-8 col-sm-12">
				<h2>More about the project.</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
			</div>
         </div>
         
         <div className="row mt30">
         </div>
         
         <div className="row mt30"> 
			<div className="col-md-12 col-sm-12">
				<hr/>
			</div>
			<div className="col-md-6 col-sm-6">
				<h3>Onetel Design Studio</h3>
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat. Lorem ipsum dolor sit amet.</p>
				<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismo.</p>
			</div>
			<div className="col-md-6 col-sm-6">
				<strong>React</strong>
				<span className="pull-right">90%</span>
					<div className="progress">
						<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}></div>
					</div>

				<strong>HTML5 &AMP; CSS3</strong>
				<span className="pull-right">70%</span>
					<div className="progress">
						<div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}></div>
					</div>
				<strong>Bootstrap</strong>
				<span className="pull-right">50%</span>
					<div className="progress">
						<div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}></div>
					</div>
				<strong>Node JS &AMP; Mongo DB </strong>
				<span className="pull-right">70%</span>
					<div className="progress">
						<div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}></div>
					</div>
				</div>
			</div>
		</div>
	</div>	
	<Footer />
    </body>
  );
}
