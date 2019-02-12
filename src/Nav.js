import React, { Component } from 'react';
import User from './User';
import logoP from './img/logoP.png';
import botonMenu from './img/botonMenu.png';
import anadir from './img/anadir.png';
import triangulo from './img/triangulo.png';
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
            <div className="nav1">
                <button className="boton-anadir"><img src={anadir} className="img-anadir"/></button>
                <button className="boton-menu-p boton-user"><User mostrar="img"/><img src={triangulo} className="triangulo"/></button>

                <button className="boton-menu-p"><img src={botonMenu} className="img-menu-p" /></button>
            </div>
            
            
        </div>
      );
    }
  }
  
  export default Nav;