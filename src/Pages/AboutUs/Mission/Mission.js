import React, { Component } from 'react';
import './Mission.css';

class Mission extends Component {
  // constructor(props){
    // super(props);
    // this.state = {};
  // }

  // componentWillMount(){}
  // componentDidMount(){}
  // componentWillUnmount(){}

  // componentWillReceiveProps(){}
  // shouldComponentUpdate(){}
  // componentWillUpdate(){}
  // componentDidUpdate(){}

  render() {
    return (
      <div>
        <div className="container">
          <div className="row m-3">
              <div className="col-md-2"></div>
              <div className="col-md-8 text-center">
                <p className="h2 font-weight-bold text-danger text-uppercase">Misión</p>
              </div>
              <div className="col-md-2"></div>
          </div>
        </div>

      </div>
    );
  }
}

export default Mission;