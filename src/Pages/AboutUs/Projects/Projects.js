import React, { Component } from 'react';
import './Projects.css';

class Projects extends Component {
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
              <p className="h2 font-weight-bold text-danger">PROPUESTAS Y PROYECTOS</p>
            </div>
            <div className="col-md-2"></div>
          </div>

          <div className="row">
            <div className="col-md-12 m-3">

              <p className="text-uppercase font-weight-bold">el marco de lo antes expuesto, la comunidad organizada plantea las siguientes propuestas y proyectos de forma priorizada:</p>
              
              <p className="font-weight-bold text-danger">SEGURIDAD:</p>
              <lu>
                <li className="text-uppercase">
                  recuperación de unidades para el patrullaje en toda la urbanización nueva casarapa.
                </li>
                <li className="text-uppercase">
                recuperación y puesta en operaciones de las garitas de seguridad de las zonas altas , cuyas calles son ciegas, esto con el objeto de que los habitantes de esos sectores puedan contar con su vigilancia privada, y de esa manera controlar sus accesos.
                </li>
                <li className="text-uppercase">
                desarrollar un plan de seguridad ciudadana entre el sector público (cuerpos de seguridad) y el sector privado (vigilancia).
                </li>
                <li className="text-uppercase"> 
                implementación de un sistema de radio- transmisores para una aficaz política de seguridad ciudadana.
                </li>
              </lu>
            </div>

            <div className="col-md-12 m-3">

              <p className="font-weight-bold text-danger">OBRAS PÚBLICAS Y VIALIDAD:</p>
              <lu>
                <li className="text-uppercase">
                  Pavimentación de las avenidas San Nicolas de Bari, San Pedro Apostol, San Pablo, Santa María, San Juan Bautista, San Andrés, San Rafael y San Miguel.
                </li>
                
                <li className="text-uppercase">
                  Colocación de reductores de velocidad en algunos sectores.
                </li>

                <li className="text-uppercase">
                  Alumbrado de las avenidas antes señaladas. (55 quemadas o deterioradas por tiempo de uso).
                </li>

                <li className="text-uppercase">
                  Reparación de canchas de úsos múltiples existentes y construcción de otras instalaciones deportivas y recreativas.
                </li>

                <li className="text-uppercase">
                  Construcción del club de los adultos mayores.
                </li>

                <li className="text-uppercase">
                  Plan de señalización de toda la urbanización y el eje este de la ciudad.
                </li>

                <li className="text-uppercase">
                  Recuperación de la planta de tratamiento de Nueva Casarapa.
                </li>
              </lu>
            </div>

            <div className="col-md-12 m-3">

              <p className="font-weight-bold text-danger text-uppercase">Rescate de las normas de convivencia:</p>
              <lu>
                <li className="text-uppercase">
                  Desarrollar un plan masivo de difusión de normas de convivencia en la urbanización.  
                </li>
                
                <li className="text-uppercase">
                  Eliminar y prohibir la proliferación de ventas ambulantes.
                </li>

                <li className="text-uppercase">
                  Prohibir el estacionamiento de vehículos en la vía pública (buses, camiones y trailers)
                </li>
              </lu>

            </div>

            <div className="col-md-12 m-3">

              <p className="font-weight-bold text-danger text-uppercase">Otros temas importantes:</p>
              <lu>
                <li className="text-uppercase">
                  Recuperación integral del sector <strong>LA SAFRA</strong> de Nueva Casarapa.
                </li>
                
                <li className="text-uppercase">
                  Revisión de la prestación de servicios de transporte en la urbanización Nueva Casarapa.
                </li>

                <li className="text-uppercase">
                  La práctica de fútbol en areas no deportivas, que además son lucrativas y no aportan a la comunidad.
                </li>

                <li className="text-uppercase">
                  Construcción de un centro de educación inicial, biblioteca virtual                   
                </li>

                <li className="text-uppercase">
                  Construcción de un centro médico asistencial.
                </li>

                <li className="text-uppercase">
                  Incorporar a la misión Nevado y Jovenes de la Patria.
                </li>
              </lu>
            </div>

          </div>

        </div>
      
      </div>
    );
  }
}

export default Projects;