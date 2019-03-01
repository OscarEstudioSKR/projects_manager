import React, { Component } from 'react';

import logoP from './img/logoP.png';
import botonMenu from './img/botonMenu.png';
import anadir from './img/anadir.png';
import triangulo from './img/triangulo.png';
import Buscador from './elements/js/Buscador';
import checkImg from './img/checkImg.png';



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
    cerrarMenus= ()=> {
        this.setState({
            menuOtionsAbierto: false,
            menuUserAbierto: false,
        });
    }


    render() {
      return (
        <div className="Nav">
            <div className="nav">
                <button className="logo-img" onClick={()=>this.props.cambiarPagina("Main")}><img src={logoP} /></button>
                <Buscador />
                <a className="enlace-nav" onClick={()=>this.props.cambiarPagina("Proyectos")}>Proyectos</a>
                <a className="enlace-nav" onClick={()=>this.props.cambiarPagina("Equipos")}>Equipos</a>
            </div>
            <div className="nav nav2">
                <button className="boton-anadir" onClick={()=>{
                    this.cerrarMenus();
                    this.props.cambiarPagina("Proyectos");
                    this.props.nuevoProyecto(this.props.proyectoVacio);
                    }}><img src={anadir} className="img-anadir"/></button>
                <button onClick={this.abrirMenuUser = this.abrirMenuUser.bind(this)} className="boton-menu-p boton-user"><img src={this.props.user.cliente.imgUser} className="user-logo"/><img src={triangulo} className="triangulo"/></button>
                <button onClick={this.abrirMenuOpt = this.abrirMenuOpt.bind(this)} className="boton-menu-p"><img src={botonMenu} className="img-menu-p" /></button>
            </div>
            
            {this.state.menuUserAbierto && (<this.MenuUser user={this.props.user} cambiarPagina={this.props.cambiarPagina} cerrarMenus={this.cerrarMenus}/>)}
            {this.state.menuOtionsAbierto && (<this.MenuOpt user={this.props.user} cambiarPagina={this.props.cambiarPagina} cerrarMenus={this.cerrarMenus}/>)}

        </div>
      );
    }

    MenuUser(props){
        return(
            <div className="menuUsers">
                <div className="flechaAzul"/>
                <div className="cont-datosNav">
                    <img src={checkImg} />
                    <h3 className="datosNav">{props.user.cliente.nombre}</h3>
                </div>
                <div className="botonesNav">
                    <a onClick={()=>(props.cambiarPagina("Perfil"), props.cerrarMenus())}>Perfil</a>
                    <a onClick={()=>(props.cambiarPagina("Proyectos"), props.cerrarMenus())}>Mis proyectos</a>
                    <a onClick={()=>(props.cambiarPagina("Equipos"), props.cerrarMenus())}>Mis equipos</a>
                </div>
                <a className="botonDesconectar">Desconectar</a>
            </div> 
        )
    }
    MenuOpt(props){
        return(
            <div className="menuOpt">
                <div className="flechaBlanca"/>
                <a onClick={()=>(props.cambiarPagina("Opciones"), props.cerrarMenus())}>Opciones</a>
                <a>Cambiar perfil</a>
                <a>Ayuda</a>
                <a href="#Footer">Contacto</a>
            </div> 
        )
    }

  }
  
  export default Nav;