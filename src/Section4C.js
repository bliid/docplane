import React, { Component } from 'react';

import "./Section4C.css";

class Section4C extends Component {
    render() { 
        return ( 
           
            
                    <div className="section_container">
                      <div /* style="padding-top: 30px;" */ >
                        <div>
                          <img
                            className="icon_4div"
                            src={this.props.img}
                            alt="flag"
                          />
                          <h3>{this.props.h}</h3>
                          <p>
                          {this.props.p}
                          </p>
                        </div>
                      </div>
                    </div>
                

         );
    }
}
 
export default Section4C;