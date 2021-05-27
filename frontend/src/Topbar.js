import './nivo-lightbox.css';
import './templatemo-style.css';
import React, { Component } from "react";
import { BrowserRouter, Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="container">
        <div className="navbar navbar-default navbar-static-top" role="navigation">
            <div className="collapse navbar-collapse" id="dashnav" style={{"display":"block"}}>
                <ul className="nav navbar-nav navbar-right">
                   <li><a>
                        <Link to="/">HOME</Link>
                    </a></li>
                    <li><a>
                        <Link to="/about">ABOUT</Link>
                    </a></li>
                    <li><a>
                        <Link to="/login">LOGIN</Link>
                    </a></li>
                    <li><a>
                        <Link to="/signup">SIGN UP</Link>
                    </a></li>
                </ul>
            </div>
        </div>
    </div>
  );
}

