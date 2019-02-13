import React, { Component } from 'react';
import icono1 from './img/icono1.png';
import icono2 from './img/icono2.png';
import icono3 from './img/icono3.png';
import redes1 from './img/redes1.png';
import redes2 from './img/redes2.png';
import redes3 from './img/redes3.png';
import redes4 from './img/redes4.png';


class Footer extends Component {
    render() {
      return (
        <div className="Footer">
            <div className="footer-1">
              <h4>CREA UN NUEVO PROYECTO</h4>
              <p className="descripcion-ayuda">Busca en el navegador el botón de añadir para iniciar un nuevo proyecto o accede a uno ya creado a través de la pestaña Proyectos.</p>
              <div className="cont-textImg"><img src={icono1}/><p className="tituloChico">Contacta con nosotros</p></div>
              <div className="cont-textImg"><img src={icono2}/><p className="tituloChico">Contacta con nosotros</p></div>
              <div className="cont-textImg"><img src={icono3}/><p className="tituloChico">Contacta con nosotros</p></div>
            </div>
            <div className="footer-2">
              <div className="contenedor-footer2">
                <div className="div-corto"><strong className="texto-medio">PROJECT MANAGER</strong><br /><br />Gestiona proyectos, crea equipos y distribuye los trabajos en el panel de tareas. Organiza tus proyectos de la manera más completa y eficaz.</div> 
                <div className="div-corto"><strong>Estudio SKR</strong><br />Proyecto generado por Oscar Aparisi para el Estudio SKR.</div> 
                <div className="div-corto cont-logo-redes">
                  <img src={redes1}/>
                  <img src={redes2}/>
                  <img src={redes3}/>
                  <img src={redes4}/>
                </div> 
                <div className="contenedor-enlaces-footer">
                  <a><strong>estudio skr</strong></a>
                  <a><strong>github</strong></a>
                  <a><strong>proyectos</strong></a>
                  <a><strong>términos</strong></a>
                  <a><strong>contácto</strong></a>
                </div> 
              </div>
                        
            </div>
        </div>
      );
    }
  }
  
  export default Footer;