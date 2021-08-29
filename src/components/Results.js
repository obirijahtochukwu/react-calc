import React, { Component } from 'react';

class Results extends Component {
  render() {
    let { result } = this.props;
    return (
      <div className="conta">
        <div className="row">
          <div className="col-12 mx-auto mb-4">
            <input type="text" value={result} className='w-100'/>
          </div>
        </div>
      </div>
    );
  }
}

export default Results;