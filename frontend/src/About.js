import './nivo-lightbox.css';
import './templatemo-style.css';
import React, { Component } from "react";
import Topbar from "./Topbar";
import Footer from "./Footer";

export default function About() {
  return (
    <body>
	  <Topbar />

      <div id="team">
	    <div className="container">
    
		<div className="row">
			<div className="col-md-offset-2 col-md-8 col-sm-12">
				<h2>More about the project</h2>
                <p>
					MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.
					It is the stack of choice for today’s web developers looking to move quickly, particularly for those with React.js experience.
					Like any web stack, you can build whatever you want in MERN - though it’s ideally suited for cases that are JSON-heavy, cloud-native, and that have dynamic web interfaces.
					And whatever else you can dream up!
					<br/><br/>
					<ul style={{color:"yellowgreen"}}>
						<li>MongoDB - document database</li>
						<li>Express(.js) - Node.js web framework</li>
						<li>React(.js) - a client-side JavaScript framework</li>
						<li>Node(.js) - the premier JavaScript web server</li>
					</ul>
				</p>
				<br/><br/>
				<p>
				There are several npm packages that allow charts to be created in React; chart.js is one of the packages which makes the creation of charts and graphs ​very easy.
				The React wrapper for chart.js is react-chartjs-2; it makes things simpler in React, however, it doesn’t support all the customization features that come with Chart.js.
				Both these packages need to be installed using npm before they can be used.
				<br/><br/>
				<span style={{color:"yellowgreen"}}></span>
				<ol style={{color:"yellowgreen"}}>
					<li>Bar charts</li>
					<li>Pie charts</li>
					<li>Line graph</li>
				</ol>
				</p>
			</div>
         </div>

		<br/><br/>
         <div className="row mt60"> 
			<div className="col-md-6 col-sm-6" style={{marginLeft:"25%"}}>
				<strong>React</strong>
				<span className="pull-right">90%</span>
					<div className="progress">
						<div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{width: "90%"}}></div>
					</div>

				<strong>HTML5 & CSS3</strong>
				<span className="pull-right">70%</span>
					<div className="progress">
						<div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: "70%"}}></div>
					</div>
				<strong>Bootstrap</strong>
				<span className="pull-right">50%</span>
					<div className="progress">
						<div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "50%"}}></div>
					</div>
				<strong>Node JS & Mongo DB </strong>
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
