import React from 'react';

export default class TimeCell extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      value: props.value,
    }
  }

  componentDidUpdate() {
    if (this.state.value !== this.props.value) {
      this.setState({ value: this.props.value });
    }
  }

  render() {
    return (
      <div className="time-cell">
        <div className="angle left"></div>
        <div className="angle right"></div>

        <div className="rect top-rect">
          <p>{this.state.value}</p>
        </div>
        <div className="rect bottom-rect">
          <p>{this.state.value}</p>
        </div>
      </div>
    );
  }
}