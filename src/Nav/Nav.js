import React, { Component } from 'react';
import './Nav.css';

class Nav extends Component {
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
        <nav class="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top">
          <div class="container">
            <a class="navbar-brand text-info font-weight-bold" href="/">Comité de Usuarios de Nueva Casarapa</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">Inicio
                        <span class="sr-only">(current)</span>
                      </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Acerca de Nosotros</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Servicios</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Contáctenos</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      
      </div>
    );
  }
}

export default Nav;