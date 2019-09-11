import React, { Component } from 'react';
import Box from './Box'
import "./Section2.css";

class Section2 extends Component {
    render() { 
        return ( 
        <div className='Section2'>
        <div className="inner" id="secend_section">
          <div id="div_2column_1">
            <Box for='For patients' text='Find a doctor, book a visit and solve any health-related doubt' slect={true} img='https://www.docplanner.com/img/screen-marketplace@2x.png'/>
          </div>
          <div id="div_2column_2">
          <Box for='For doctors' text='Save time managing visits and cut no-shows by half' slect={false} img='https://www.docplanner.com/img/screen-saas@2x.png'/>
          </div>
        </div>
        </div>
         );
    }
}
 
export default Section2;