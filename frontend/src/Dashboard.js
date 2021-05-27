import './nivo-lightbox.css';
import './templatemo-style.css';
import React, { Component } from "react";
import DashTopbar from "./DashTopbar";
import Footer from './Footer';

export default function Dashboard() {
  return (
    <body>
      <DashTopbar />
      <br/> <br/> <br/> <br/> <br/> <br/>
      <div id="team">
	    <div className="container">
    
		<div className="row">
			<div className="col-md-offset-2 col-md-8 col-sm-12">
				<h2>Dashboard</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet. Dolore magna aliquam erat volutpat.</p>
			</div>
         </div>
        </div>
    </div>
    <Footer />
    </body>
  );
}
