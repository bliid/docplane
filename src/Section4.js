import React, { Component } from 'react';
 import Section4C from './Section4C'
import "./Section4.css";

class Section4 extends Component {
    render() { 
        const section4con = [
            {img: "https://www.docplanner.com/img/flag.png", h:"Leader in 10 countries", p:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"},
            {img: "https://www.docplanner.com/img/visits.png", h:"1.5 million appointments", p:"booked last month"},
            {img: "https://www.docplanner.com/img/patients.png", h:"30 million unique patients", p:"visit us every month"},
            {img: "https://www.docplanner.com/img/doctors.png", h:"2 million active doctors", p:"trust in our solutions"}



        ]
        return ( 
            <div className="grey_section">
            <div id="logo_container" className="small">
              <img
                id="logo_section4"
                src="https://www.docplanner.com/img/logo.png"
                alt="logo"
              />
              <div className="inner" id="forth_section">
                <div id="div_S4_2column_1">
                  <div>
                    <h1>The world's biggest healthcare platform</h1>
                    <p>
                      We work from 6 offices all over the world, bringing Docplanner
                      Group to life in almost 20 countries.
                    </p>
                  </div>
                </div>
    
                <div id="div_S4_2column_2">
                  <div id="grid_4container">
                   
                  {section4con.map(l => <Section4C img={l.img} h={l.h} p={l.p}/>)}
                  
                    
                 
                  </div>
                </div>
              </div>
            </div>
          </div>


         );
    }
}
 
export default Section4;