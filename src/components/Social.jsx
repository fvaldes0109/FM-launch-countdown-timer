import React from "react";
// import fb from './images/icon-facebook.svg';

export default class Social extends React.Component {
  constructor(props) {
    super(props);
    
    this.icon = props.icon;
    this.site = props.site;
  }
  
  render() {
    return (
      <a className="social-icon" href="/">
        <img src={this.icon} alt={`${this.site} icon`} aria-hidden="false" />
      </a>
    );
  }
}