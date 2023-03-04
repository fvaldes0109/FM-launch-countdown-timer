import React from 'react';
import TimeCell from './TimeCell';

export default class TimeArea extends React.Component {
    
  constructor(props) {
    super(props);
    
    this.state = {
      days: 8,
      hours: 23,
      minutes: 55,
      seconds: 3,
    }
  }

  componentDidMount() {
    // Start the timer
    this.timer = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    // Stop the timer
    clearInterval(this.timer);
  }

  tick() {
    const seconds = (this.state.seconds - 1 + 60) % 60;
    const minutes = seconds !== 59 ? this.state.minutes : (this.state.minutes - 1 + 60) % 60;
    const hours = minutes !== 59 || seconds !== 59 ? this.state.hours : (this.state.hours - 1 + 24) % 24;
    const days = hours !== 23 || minutes !== 59 || seconds !== 59 ? this.state.days : this.state.days - 1;

    this.setState({ seconds, minutes, hours, days });
  }

  render() {
    return (
      <div className="time-area">
        <TimeCell label="DAYS" value={this.state.days} />
        <TimeCell label="HOURS" value={this.state.hours} />
        <TimeCell label="MINUTES" value={this.state.minutes} />
        <TimeCell label="SECONDS" value={this.state.seconds} />
      </div>
    );
  }
}