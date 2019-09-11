import React, { Component } from 'react';
import Section1_p from './Section1_p'
import "./Section1.css";

class Section1 extends Component {
    render() { 
        return ( 
            <div className='Section1'>

        <div className="inner" id="first_section">
          <img src="https://www.docplanner.com/img/sygnet.png" alt="logo" />
          <h1>Making the healthcare experience more human</h1>
          <div>
              <Section1_p  p="We want patients to find the perfect doctor and book an
              appointment in the most easy way. The patient journey should be
              enjoyable, and that's why we are always next to them: to help them
              find the best possible care. Anytime, anywhere."  />
              
              <Section1_p  p="We also help doctors to better manage their practice and build
              their online reputation. With our integrated end-to-end solution,
              doctors are able not only to improve their online presence, but
              also to devote their time to what really matters: their patients."  />
           
          </div>
        </div>
      </div>


         );
    }
}
 
export default Section1;