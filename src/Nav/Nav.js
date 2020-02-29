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
        <nav class="navbar navbar-expand-lg navbar-light bg-blue shadow fixed-top">
          <div class="container">
            
            <a class="navbar-brand text-info font-weight-bold" href="/">Comité de Usuarios de Nueva Casarapa</a>
                
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link text-white font-weight-bold" href="/">Inicio</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle text-white font-weight-bold" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Acerca de Nosotros
                  </a>
                  <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="/about-us/contact-us">Contáctenos</a>
                    <a class="dropdown-item" href="/about-us/projects">Propuestas y Proyectos</a>
                    <a class="dropdown-item" href="/about-us/mission">Misión</a>
                    <a class="dropdown-item" href="/about-us/vision">Visión</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white font-weight-bold" href="/services">Biblioteca Virtual</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link text-white font-weight-bold" href="/contact-us">Iniciar Sesión</a>
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