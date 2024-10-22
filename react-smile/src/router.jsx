import React, { Component } from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './App'
import About from './components/about'
import Contact from './components/contact'

export default class header extends Component {
    render(){
        return(
            <Router>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </Router>
           

        );
    }
}