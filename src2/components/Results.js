import React, { Component } from 'react';

class Results extends Component {
  render() {
    let { result } = this.props;
    return (
      <div className="display__results w-100">
        { result }
      </div>
    );
  }
}

export default Results;