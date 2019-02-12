import React, { Component } from 'react';
import User from './User';
import logoP from './img/logoP.png';
import botonMenu from './img/botonMenu.png';
import Buscador from './elements/js/Buscador';


class Nav extends Component {
    render() {
      return (
        <div className="Nav">
            <div className="nav1">
                <img className="logo-img" src={logoP}/>
                <Buscador />
                <a className="enlace-nav" href="#">Proyectos</a>
                <a className="enlace-nav" href="#">Equipos</a>
            </div>
            <div>
                <button className="boton-menu-p"><User mostrar="img"/></button>
                <button className="boton-menu-p"><img src={botonMenu} className="img-menu-p" /></button>
            </div>
            
            
        </div>
      );
    }
  }
  
  export default Nav;