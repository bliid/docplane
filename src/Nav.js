import React, { Component } from 'react';
import logo from "./res/logo.svg";
import "./Nav.css";

class Nav extends Component {
   
    render() { 
        return ( 
            <div className='Nav'>

        <img
          id="docplanner_logo"
          src={logo}
          alt="docplanner_logo"
        />

        <ul id="menu">
          <li id="about_menu" className="menu_link">About us</li>
          <li className="menu_link">Carrer</li>
          <li className="menu_link dropdown">
            <a className="dropbtn">Departments</a>
            <div className="dropdown-content">
              <a href="https://www.docplanner.com/department?dep=marketing">Marketing  PR</a>
              <a href="https://www.docplanner.com/department?dep=customer">Customer Success  Sales</a>
              <a href="https://www.docplanner.com/department?dep=it">IT, Product, Design  UX</a>
              <a href="https://www.docplanner.com/department?dep=finance">Finance  Administration</a>
              <a href="https://www.docplanner.com/department?dep=hr">HR  more</a>
            </div>
          </li>
        </ul>
            </div>
         );
    }
}
 
export default Nav;