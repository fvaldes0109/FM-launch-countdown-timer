import React, { Component } from 'react';
import './App.css';

import Social from './components/Social.jsx';
import fb from './images/icon-facebook.svg';
import ig from './images/icon-instagram.svg';
import pt from './images/icon-pinterest.svg';

class App extends Component {
  render() {
    return (
      <>
        <main>
          <div className="mountains-container"></div>
          <h1>WE'RE LAUNCHING SOON</h1>
        </main>
        
        <footer>
          <div className="social-container">
            <Social icon={fb} site="Facebook" />
            <Social icon={pt} site="Pinterest" />
            <Social icon={ig} site="Instagram" />
          </div>

          <div className="attribution">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>. 
            Coded by <a href="https://www.linkedin.com/in/fernando-vald%C3%A9s-garc%C3%ADa-a46142221/">Fernando Valdés García</a>.
          </div>
        </footer>
      </>
    );
  }
}

export default App;
