import React, { Component } from 'react';
import Perfil from './perfil.js';
import Equipos from './equipos.js';
import logoP from './img/logoP.png';
import diskete from './img/diskete.png';
import mas from './img/mas.png';


class Header extends Component {
  constructor(props){
    super(props);
  }

    render() {
      let proyectoSeleccionado = this.props.user.cliente.proyectos[this.props.user.proyectoSeleccionado];
      let eliminar = ()=>{
        this.props.user.cambiarValor('menu', '');
        this.props.eliminarProyecto(this.props.user.proyectoSeleccionado);}


      return (
        <div className="Cuerpo">
            {this.props.user.pagina === "Main" && <this.Main user={this.props.user}/>}

            {this.props.user.pagina === "Proyectos" && <this.Proyectos 
              
              user={this.props.user}
              proyectoVacio={this.props.proyectoVacio}
              nuevoProyecto={this.props.nuevoProyecto}
              menuInfo = {<this.MenuInfo 
                user = {this.props.user}/>}
              caja={ (i)=> <this.CajaProject 
                user = {this.props.user}
                id={i}
                cambiarDatos = {this.props.cambiarDatos}
                eliminarProyecto = {this.props.eliminarProyecto}
                cambiarInfoProyecto ={this.props.cambiarInfoProyecto}
                />} 
               />}
            
            {this.props.user.menu==="confirmarEliminar" &&
              
              <div className="ventana-extra2">
                <header className="titulo-ventana-extra">{'¿Deseas eliminar el proyecto \"' + proyectoSeleccionado.nombre.toUpperCase() + '\"?'}</header>
                <div className="interior-ventana-extra2"><br/>¿Seguro que quieres eliminar este proyecto? <br/> La acción no se podrá deshacer.</div>
                <footer className="footer-ventana-extra2">
                  <button className="boton-cerrar-extra3 fx-boton" onClick={eliminar.bind(this)}>Eliminar</button>
                  <button onClick={()=>this.props.user.cambiarValor('menu', '')} className="boton-cerrar-extra2 fx-boton">Cerrar</button></footer>
              </div>
            }

            {this.props.user.pagina === "Equipos" && <Equipos user={this.props.user}/>}
            {this.props.user.pagina === "Perfil" && <Perfil user={this.props.user}/>}
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

      return(
        <div className="ProyectosPage">
          <div className="proyectosPage-div1">
            {e.menuInfo }
          </div>
          <div className="proyectosPage-div2">
            <div className="proyectosPage-div2-cabecera">
              <h2>{"Proyectos "+e.user.cliente.nombre}</h2>
              <button className="fx-boton" onClick={ ()=>e.nuevoProyecto(e.proyectoVacio) } >Crear nuevo</button>
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
              <button onClick={()=>e.user.cambiarValor('menu', 'Lista de Usuarios')} className="botonSinFondo "><img src={mas} className="img-p-equipo  boton-borde fx-boton"/></button>
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
                {e.user.cliente.contactos.map((obj)=>{
                  return(
                    <div className="caja-user-name fx-boton" onClick={()=>e.user.cambiarValor('menu', '')}>
                      <img src={obj.img}  className="img-m-equipo"/>
                      <p>{obj.nombre}</p>
                    </div>
                  )}
                  
                  
                  )}
                </div>
              <footer className="footer-ventana-extra"><button onClick={()=>e.user.cambiarValor('menu', '')} className="boton-cerrar-extra fx-boton">Cerrar</button></footer>
            </div>}
        </div>
        
      ) 
    }
    

    CajaProject(e){
      let obj = e.id;
      let cambiar=(event)=>{ e.cambiarDatos(obj.id, event.target.name, event.target.value)};
      let infoProyecto =()=>{ e.cambiarInfoProyecto(obj.id);};

      let styleSelected = "";
      obj.id === e.user.proyectoSeleccionado ?
        styleSelected = {
          border: '1px solid var(--color3)',
          boxShadow: '2px 2px 12px var(--color1)'}:
        styleSelected = {border: '1px solid var(--color5)'}



      return(
        <div className="CajaProject" >
          <button className="BotonCajaTodo" style={styleSelected} onClick={infoProyecto.bind(this)}>
            <span className="idCaja">{(obj.id+1)+". "}</span>
            <input onChange={cambiar.bind(this)} name="nombre" className="tituloCaja botonSinFondo" type="text" value={obj.nombre}/>
            <button className="EliminarCaja fx-boton" onClick={()=>e.user.cambiarValor('menu', 'confirmarEliminar')}>X</button>


            <button className="botonCaja fx-boton">Abrir</button>
            <textarea onChange={cambiar.bind(this)} name="descripcion" className="textoCaja botonSinFondo" type="text" value={obj.descripcion}/>
          </button>
        </div>);
    }    
      
    Opciones(e){
        return(
          <div className="MainPage">
            <h1>Opciones</h1><h2>Gestiona todos tus proyectos en un mismo lugar.</h2>    
          </div>);}



  }
  
  export default Header;