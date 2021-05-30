import './nivo-lightbox.css';
import './templatemo-style.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

export default function ChartNav() {
  return (
    <div className="container">
        <div className="navbar navbar-static-top" style={{width:"55%"}} role="navigation">
            <div>
                <ul className="nav navbar-nav navbar-right" id="chartnav">
                    <li><a>
                        <Link to="/BarYear" style={{color:"whitesmoke"}}>Year wise spendings</Link>
                    </a></li>
                    <li><a>
                        <Link to="/PieCategory" style={{color:"whitesmoke"}}>Categorise Spendings</Link>
                    </a></li>
                    <li><a>
                        <Link to="/LineYear" style={{color:"whitesmoke"}}>Trend in spendings</Link>
                    </a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}

