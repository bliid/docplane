import React, { Component } from 'react';

import "./Section3Li.css";

class Section3Li extends Component {
    render() { 
        return ( 

            <li>
              <a
                className="a_list"
                href={this.props.href}
                ><img
                  className="li_logo"
                  src="https://www.docplanner.com/img/sygnet.png"
                  alt="logo"
                />{this.props.text}</a
              >
            </li>
           
         );
    }
}
export default Section3Li;