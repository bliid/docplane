import React from 'react';
import Nav from './Nav'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Footer from './Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
