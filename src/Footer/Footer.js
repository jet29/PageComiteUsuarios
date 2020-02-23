import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
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
        <footer class="page-footer font-small blue bg-light">
          <div className="footer-copyright text-center py-3">© 2020 Created by: José Tirado -
            <a href="https://github.com/jet29"> Github</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;