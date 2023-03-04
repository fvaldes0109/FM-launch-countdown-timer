import React from 'react';

export default class TimeCell extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      value: props.value,
      cells: []
    }
  }

  componentDidMount() {
    this.setState({ value: this.props.value, cells: (() => {

      const newArr = this.state.cells.concat([
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
      ]);
      return newArr.length <= 2 ? newArr : newArr.splice(1, 2);
    })()});
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.value !== this.props.value) {
      this.setState({ value: this.props.value, cells: [
          <div className="time-cell new" key={`1-${this.props.label}`}>
            <div className="angle left"></div>
            <div className="angle right"></div>

            <div className="rect top-rect">
              <p>{this.props.value}</p>
            </div>
            <div className="rect bottom-rect">
              <p>{this.props.value}</p>
            </div>
          </div>,
          <div className="time-cell old" key={`2-${this.props.label}`}>
            <div className="angle left"></div>
            <div className="angle right"></div>

            <div className="rect top-rect">
              <p>{this.state.value}</p>
            </div>
            <div className="rect bottom-rect">
              <p>{this.state.value}</p>
            </div>
          </div>
        ]
      });
    }
    else if (prevState.cells.length === 2 && this.props.label !== 'SECONDS') {
      this.setState({ cells: [
        <div className="time-cell" key={`2-${this.props.label}`}>
            <div className="angle left"></div>
            <div className="angle right"></div>

            <div className="rect top-rect">
              <p>{this.state.value}</p>
            </div>
            <div className="rect bottom-rect">
              <p>{this.state.value}</p>
            </div>
          </div>
      ]})
    }
  }

  render() {

    return (
      <div className="time-container">
        <div className="cells">
          {this.state.cells}
        </div>
        <p>{this.props.label}</p>
      </div>

    );
  }
}