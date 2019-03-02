import React, { Component } from 'react';

import userImg from './img/user_invitado.png';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';




class App extends Component {
  constructor(){
    super();
    this.state= {
      pagina: "Equipos",
      proyectoSeleccionado: -1,
      menu: "",
      cambiarValor: (campo, valor)=>this.setState ({ [campo]: valor }),
      cliente: { 
        nombre: "Invitado",
        imgUser: userImg,
        correo: "",
        proyectos: [],
        contactos: [],
        equipos: [{
          nombreEquipo: "Equipo sin nombre",
          miembros: [],
        }],
      },
    }
  }

  cambiarPagina = (index) => this.setState({ pagina: index });

  cambiarInfoProyecto = (id) => 
    {if(id<this.state.cliente.proyectos.length){ 
      this.setState({ proyectoSeleccionado: id });}}

  nuevoProyecto = (e) => { 
    this.setState({ 
      proyectos: this.state.cliente.proyectos.push(e),
      proyectoSeleccionado: e.id,
     });
  }

  eliminarProyecto = (indice) => {
    let arr = this.state.cliente.proyectos;
    arr.splice(indice,1);
    arr.map((obj)=>{ if(obj.id >= indice){ obj.id -= 1 } });
    this.setState({   
      proyectos: arr,
      proyectoSeleccionado: -1,
    });
  }

  cambiarDatosProyecto = (id, campo, valor) => {
    let arr = this.state.cliente.proyectos;
    arr[id][campo] = valor;
    this.setState({ proyectos: arr });
  }




  render() {
    let proyectoVacio = {
      'id': this.state.cliente.proyectos.length,
      'nombre': 'Nuevo proyecto',
      'descripcion': "Descripción corta",
      'descripcion2': "Descripción larga",
      'equipo': [{
        'id': 0,
        'img': this.state.cliente.imgUser,
      }]
    }


    //Pruebas
    setInterval(() => {
      console.log("Contactos: "+JSON.stringify(this.state.cliente.contactos));
    }, 1000);



    return (
      <div className="App" id="App">
        {<Nav 
          user={this.state} 
          cambiarPagina={this.cambiarPagina}
          nuevoProyecto={this.nuevoProyecto}
          proyectoVacio = {proyectoVacio}
          />}
        <Header 
          user={this.state}
          proyectoVacio = {proyectoVacio}
          cambiarPagina={this.cambiarPagina}
          nuevoProyecto={this.nuevoProyecto}
          cambiarDatos = {this.cambiarDatosProyecto}
          eliminarProyecto = {this.eliminarProyecto}
          cambiarInfoProyecto = {this.cambiarInfoProyecto} 
          />
        <Footer user={this.state} cambiarPagina={this.cambiarPagina}/>
      </div>
    );
  }
}

export default App;
