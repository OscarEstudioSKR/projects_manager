import React, { Component } from 'react';

import logoP from './img/logoP.png';
import botonMenu from './img/botonMenu.png';
import anadir from './img/anadir.png';
import triangulo from './img/triangulo.png';
import Buscador from './elements/js/Buscador';
import checkImg from './img/checkImg.png';

import userImg0 from './img/userImg0.png';



class Nav extends Component {
    constructor(props){
        super(props);
        this.state= {
            menuUserAbierto: false,
            menuOtionsAbierto: false,
        }
      }

    abrirMenuUser(menu){
        this.setState({
            menuUserAbierto: !this.state.menuUserAbierto,
            menuOtionsAbierto: false,
        });
    }

    abrirMenuOpt(menu){
        this.setState({
            menuOtionsAbierto: !this.state.menuOtionsAbierto,
            menuUserAbierto: false,
        });
    }

    render() {
      return (
        <div className="Nav">
            <div className="nav">
                <img className="logo-img" src={logoP}/>
                <Buscador />
                <a className="enlace-nav" href="#">Proyectos</a>
                <a className="enlace-nav" href="#">Equipos</a>
            </div>
            <div className="nav nav2">
                <button className="boton-anadir"><img src={anadir} className="img-anadir"/></button>
                <button onClick={this.abrirMenuUser = this.abrirMenuUser.bind(this)} className="boton-menu-p boton-user"><img src={userImg0} className="user-logo"/><img src={triangulo} className="triangulo"/></button>
                <button onClick={this.abrirMenuOpt = this.abrirMenuOpt.bind(this)} className="boton-menu-p"><img src={botonMenu} className="img-menu-p" /></button>
            </div>
            
            {this.state.menuUserAbierto && (<this.MenuUser user={this.props.user.cliente}/>)}
            {this.state.menuOtionsAbierto && (<this.MenuOpt user={this.props.user.cliente}/>)}

        </div>
      );
    }

    MenuUser(props){
        return(
            <div className="menuUsers">
                <div className="flechaAzul"/>
                <div className="cont-datosNav">
                    <img src={checkImg} />
                    <h3 className="datosNav">{props.user.nombre}</h3>
                </div>
                <div className="botonesNav">
                    <a>Perfil</a>
                    <a>Mis proyectos</a>
                    <a>Mis equipos</a>
                    <a>Perfil</a>
                </div>
                <a className="botonDesconectar">Desconectar</a>
            </div> 
        )
    }
    MenuOpt(props){
        return(
            <div className="menuOpt">
                <div className="flechaBlanca"/>
                <a>Opciones</a>
                <a>Cambiar perfil</a>
                <a>Ayuda</a>
                <a href="#Footer">Contacto</a>
            </div> 
        )
    }

  }
  
  export default Nav;