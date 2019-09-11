import React, { Component } from 'react';

import "./Section5C.css";

class Section5C extends Component {
    render() { 
        return ( 
           
            <div className="contain_image">
            <div>
              <a
                href={this.props.href}
              >
                <img
                  className="image_conatained"
                  src={this.props.img}
                  alt="poland"
                />
                <div>
                  <div className="content">
                    <p>{this.props.p}</p>
                    <span>See openings</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
                

         );
    }
}
 
export default Section5C;