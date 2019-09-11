import React, { Component } from 'react';
 import Section5C from './Section5C'
import "./Section5.css";

class Section5 extends Component {
    render() { 
        const data5=[
            {href:"https://www.docplanner.com/career?&loc=poland#jobs-offers", img:'https://www.docplanner.com/images/warsaw.png', p:'Warsaw' },
            {href:"https://www.docplanner.com/career?&loc=spain#jobs-offers", img:'https://www.docplanner.com/images/barcelona.png', p:'Barcelona' },
            {href:"https://www.docplanner.com/career?&loc=rome#jobs-offers", img:'https://www.docplanner.com/images/istanbul.png', p:'Istanbul' },
            {href:"https://www.docplanner.com/career?&loc=italy#jobs-offers", img:'https://www.docplanner.com/images/rome.png', p:'Rome' },
            {href:"https://www.docplanner.com/career?&loc=mexico#jobs-offers", img:'https://www.docplanner.com/images/mexico-city.png', p:'Mexico City' },
            {href:"https://www.docplanner.com/career?&loc=brazil#jobs-offers", img:'https://www.docplanner.com/images/curitiba.png', p:'Curitiba' }
        ]
        return ( 
            <div className="Section5">
            

          <div className="inner_flex">
            <div id="partone">
              <h1>Improve the lives of millions. Change yours forever</h1>
              <p>
                More than 1000 team mates share our same vision, goals and
                passion. With offices in Warsaw, Barcelona, Istanbul, Rome,
                Mexico City and Curitiba, our search for great talent never
                stops.
              </p>
            </div>

            <div id="container_3column">

            {data5.map(data => <Section5C href={data.href}  img={data.img}  p={data.p}   />)}


            </div>
          </div>
        </div>




         );
    }
}
 
export default Section5;