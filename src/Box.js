import React, { Component } from 'react';

import "./Box.css";

class Box extends Component {
    render() { 
        return ( 
        <div className='Box'>
              <h2 className="h2_colomn2">{this.props.for}</h2>
              <h1 className="h1_colomn2">
                 {this.props.text}
              </h1>
              {this.props.slect ? (<select id="country_select" data-id="country_select">
                <option>Choose country</option>
                <option value="http://www.doctoraliar.com">Argentina</option>
                <option value="http://www.doctoralia.com.au">Australia</option>
                <option value="http://www.doctoralia.com.br">Brazil</option>
                <option value="http://www.doctoralia.cl">Chile</option>
                <option value="http://www.doctoralia.co">Colombia</option>
                <option value="http://www.znamylekar.cz">Czech</option>
                <option value="http://www.doctoralia-fr.com">France</option>
                <option value="http://www.miodottore.it">Italy</option>
                <option value="http://www.doctoralia.com.mx">Mexico</option>
                <option value="http://www.doctoralia.pe">Peru</option>
                <option value="http://www.znanylekarz.pl">Poland</option>
                <option value="http://www.doctoralia.com.pt">Portugal</option>
                <option value="http://www.doctoralia.es">Spain</option>
                <option value="http://www.doktortakvimi.com">Turkey</option>
                <option value="http://www.doctoralia.co.uk">UK</option>
              </select>) : "" }
              
              <img
                className="img_relative"
                src="https://www.docplanner.com/img/screen-marketplace@2x.png"
                alt="pat_image"
              />

        </div>
         );
    }
}
 
export default Box;