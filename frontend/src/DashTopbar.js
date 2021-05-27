import './nivo-lightbox.css';
import './templatemo-style.css';
import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="container">
        <div className="navbar navbar-default navbar-static-top" role="navigation">
            <div className="collapse navbar-collapse">
                <ul className="nav navbar-nav navbar-right">
                    <li><a>
                        <Link to="/addexpense">ADD EXPENSE</Link>
                    </a></li>
                    <li><a>
                        <Link to="/dashboard">DASHBOARD</Link>
                    </a></li>
                    <li><a>
                        <Link to="/logout">LOGOUT</Link>
                    </a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}

