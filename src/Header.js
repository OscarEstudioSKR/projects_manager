import React, { Component } from 'react';
import logoP from './img/logoP.png';
import diskete from './img/diskete.png';
import mas from './img/mas.png';
import { lchmodSync } from 'fs';


class Header extends Component {
  constructor(props){
    super(props);
  }

    render() {
      return (
        <div className="Cuerpo">
            {this.props.user.pagina === "Main" && <this.Main user={this.props.user}/>}

            {this.props.user.pagina === "Proyectos" && <this.Proyectos 
              
              user={this.props.user}
              nuevoProyecto={this.props.nuevoProyecto}
              menuInfo = {<this.MenuInfo 
                user = {this.props.user}/>}
              caja={ (i)=> <this.CajaProject 
                id={i}
                cambiarDatos = {this.props.cambiarDatos}
                eliminarProyecto = {this.props.eliminarProyecto}
                cambiarInfoProyecto ={this.props.cambiarInfoProyecto}
                />} 
               />}

            {this.props.user.pagina === "Equipos" && <this.Equipos user={this.props.user}/>}
            {this.props.user.pagina === "Perfil" && <this.Perfil user={this.props.user}/>}
            {this.props.user.pagina === "Opciones" && <this.Opciones user={this.props.user}/>}
        </div>
      );
    }

    Main(){
      return(
        <div className="MainPage">
          <h1>Project Manager</h1><h2>Gestiona todos tus proyectos en un mismo lugar.</h2>
          <img src={diskete}></img>
          <div>
            <p className="parrafo-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit in nisi, dignissim mus fames. Eleifend duis luctus himenaeos potenti nostra vel penatibus, hac tellus lectus felis ullamcorper curae, natoque aenean quam commodo fermentum tempus. Montes egestas nostra mauris dui tincidunt neque pharetra, eget molestie donec elementum interdum lacinia mattis aptent, fringilla duis semper risus taciti nascetur. <br /><br />Feugiat pretium suscipit pellentesque ut ornare class justo tellus molestie, sed mus odio lacinia varius mi eros suspendisse turpis, gravida cras sem massa eu facilisis placerat ad. Bibendum facilisi aliquet cras augue commodo natoque blandit nulla, felis ultricies ullamcorper gravida sapien </p>
            <p className="parrafo-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit in nisi, dignissim mus fames. Eleifend duis luctus himenaeos potenti nostra vel penatibus, hac tellus lectus felis ullamcorper curae, natoque aenean quam commodo fermentum tempus. Montes egestas nostra mauris dui tincidunt neque pharetra, eget molestie donec elementum interdum lacinia mattis aptent, fringilla duis semper risus taciti nascetur. <br /><br />Feugiat pretium suscipit pellentesque ut ornare class justo tellus molestie, sed mus odio lacinia varius mi eros suspendisse turpis, gravida cras sem massa eu facilisis placerat ad. Bibendum facilisi aliquet cras augue commodo natoque blandit nulla, felis ultricies ullamcorper gravida sapien </p>
          </div>
        </div>);}

    Proyectos(e){
      let objVacio = {
        'id': e.user.cliente.proyectos.length,
        'nombre': (e.user.cliente.proyectos.length+1)+'. Nuevo proyecto',
        'descripcion': "Descripción corta",
        'descripcion2': "Descripción larga",
        'equipo': [{
          'id': 0,
          'img': e.user.cliente.imgUser,
        }]

      }
      return(
        <div className="ProyectosPage">
          <div className="proyectosPage-div1">
            {e.menuInfo }
          </div>
          <div className="proyectosPage-div2">
            <div className="proyectosPage-div2-cabecera">
              <h2>{"Proyectos "+e.user.cliente.nombre}</h2>
              <button onClick={ ()=>e.nuevoProyecto(objVacio) } >Crear nuevo</button>
              <line></line>
            </div>
            <div className="proyectosPage-div2-contenido">
             { e.user.cliente.proyectos.map((i)=>e.caja(i)).reverse() }
            </div>
          </div>
        </div>);
    }
    
    MenuInfo(e){
      let id = e.user.proyectoSeleccionado;
      let projects = e.user.cliente.proyectos;
      let project = projects[id];
      let listaEquipos = e.user.cliente.equipos;

      return(
        <div>
          <div className="recuadro-img-logo">
            <img src={e.user.cliente.imgUser} className="img-logo-g"/>
            <header className="titulo-proyecto-info">
              {id != -1 ? project.nombre.toUpperCase(): "Seleccione un proyecto"}
            </header>         
          </div>
          {id != -1 && <div className="contenido-info">
            <div>
              Equipo: 
              <br/><hr/>
              {project.equipo.map((obj)=> <img src={obj.img} className="img-p-equipo"/>)}
              <button onClick={()=>e.user.cambiarValor('menu', 'Lista de Usuarios')} className="botonSinFondo"><img src={mas} className="img-p-equipo  boton-borde"/></button>
              <br/><hr/>  
            </div>
            Descripción:<br/><hr/>
            <p>{project.descripcion}</p><hr/>
            Detalles: <br/><hr/>
            <p>{project.descripcion2}</p>
          </div>}
          {e.user.menu === "Lista de Usuarios" && 
            <div className="ventana-extra">
              <header className="titulo-ventana-extra">USUARIOS</header>
              <div className="interior-ventana-extra">
                {project.equipo.map((obj)=> <img src={obj.img} onClick={()=>e.user.cambiarValor('menu', '')} className="img-m-equipo"/>)}
                </div>
              <footer className="footer-ventana-extra"><button onClick={()=>e.user.cambiarValor('menu', '')} className="boton-cerrar-extra">Cerrar</button></footer>
            </div>}
        </div>
        
      ) 
    }
    

    CajaProject(e){
      let obj = e.id;
      let cambiar=(event)=>{ e.cambiarDatos(obj.id, event.target.name, event.target.value)};
      let eliminar=()=>{ e.eliminarProyecto(obj.id)};
      let infoProyecto =()=>{ e.cambiarInfoProyecto(obj.id);};

      return(
        <div className="CajaProject">
          <button className="BotonCajaTodo" onClick={infoProyecto.bind(this)}>
            <input onChange={cambiar.bind(this)} name="nombre" className="tituloCaja botonSinFondo" type="text" value={obj.nombre}/>
            <button className="EliminarCaja" onClick={eliminar.bind(this)}>X</button>
            <button className="botonCaja">Abrir</button>
            <textarea onChange={cambiar.bind(this)} name="descripcion" className="textoCaja botonSinFondo" type="text" value={obj.descripcion}/>
          </button>
        </div>);
    }    
      
    Equipos(e){
      return(
        <div className="MainPage">
          <h1>Equipos</h1><h2>Gestiona todos tus proyectos en un mismo lugar.</h2>    
        </div>);}
    Perfil(e){
      return(
        <div className="MainPage">
          <h1>Perfil</h1><h2>Gestiona todos tus proyectos en un mismo lugar.</h2>    
        </div>);}
    Opciones(e){
        return(
          <div className="MainPage">
            <h1>Opciones</h1><h2>Gestiona todos tus proyectos en un mismo lugar.</h2>    
          </div>);}



  }
  
  export default Header;