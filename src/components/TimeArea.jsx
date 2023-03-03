import React from 'react';
import TimeCell from './TimeCell';

export default class TimeArea extends React.Component {
    
  constructor(props) {
    super(props);
    
    this.state = {
      days: 8,
      hours: 23,
      minutes: 55,
      seconds: 41,
    }
  }

  render() {
    return (
      <div className="time-area">
        <TimeCell value={this.state.days} />
        <TimeCell value={this.state.hours} />
        <TimeCell value={this.state.minutes} />
        <TimeCell value={this.state.seconds} />
      </div>
    );
  }
}