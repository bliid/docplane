import React, { Component } from 'react';
import Section3Li from './Section3Li'
import "./Section3.css";

class Section3 extends Component {
    render() { 
    const    data1 = [
        {hre:'https://www.znanylekarz.pl/?_ga=2.42170725.1557749264.1565432830-961960018.1565273734', text:'Znanylekarz'},
        {hre:'https://www.doctoralia.es/', text:'Doctoralia'},
        {hre:'https://www.miodottore.it/?_ga=2.42170725.1557749264.1565432830-961960018.1565273734', text:'Miodottore'},
        {hre:'"https://www.doktortakvimi.com/?_ga=2.42170725.1557749264.1565432830-961960018.1565273734', text:'Doktortakvimi'},
        {hre:'https://www.znamylekar.cz/', text:'Znamylekar'},

    ]

        return ( 
        <div className='Section3'>
 
        <div className="inner" id="third_section">
          <h1>We are a global company with local culture</h1>
          <ul id="third_section_menu">
          {data1.map(l => <Section3Li href={l.hre} text={l.text}/> )}
          </ul>
        </div>
        </div>
    );
    }
}
 
export default Section3;