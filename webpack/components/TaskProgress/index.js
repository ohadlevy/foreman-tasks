import React, { Component } from 'react';
// import Store from 'ForemanReact/'
import UUID from 'uuid'
import ProgresBar from '../common/progressBar';

class TaskProgress extends Component {
  constructor(props) {
    super(props);
    this.state = { percent: props.percent };
  }

  clickHander(event) {
    let percent = parseInt(this.state.percent, 0);

    this.setState({ percent: (percent + 10).toString() });
  }

  reset() {
    this.setState({ percent: '0' });
  }

  render() {
    return (
      <div>
        <button onClick={this.clickHander.bind(this)}> Click Me </button>
        <button onClick={this.reset.bind(this)}> Reset Me </button>
        <ProgresBar percent={this.state.percent} />
      </div>
    );
  }
}

export default TaskProgress;
