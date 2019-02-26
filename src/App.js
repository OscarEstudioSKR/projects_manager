import React, { Component } from 'react';

import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';




class App extends Component {
  constructor(){
    super();
    this.state= {
      pagina: "Proyectos",
      cliente: { 
        nombre: "Invitado",
        imgUser: "Invitado",
        correo: "",
        proyectos: [],
      },
    }
  }

  cambiarPagina = (e) => this.setState({ pagina: e });

  nuevoProyecto = (e) => {
    this.setState({ proyectos: this.state.cliente.proyectos.push(e) });}

  eliminarProyecto = (indice) => {
    let arr = this.state.cliente.proyectos;
    arr.splice(indice,1);
    arr.map((obj)=>{ if(obj.id >= indice){ obj.id -= 1 } });
    this.setState({ proyectos: arr })
  }

  cambiarDatosProyecto = (id, campo, valor) => {
    let arr = this.state.cliente.proyectos;
    arr[id][campo] = valor;
    this.setState({ proyectos: arr });
  }

  render() {
    return (
      <div className="App">
        {<Nav user={this.state} cambiarPagina={this.cambiarPagina}/>}
        <Header 
          user={this.state}
          cambiarPagina={this.cambiarPagina}
          nuevoProyecto={this.nuevoProyecto}
          cambiarDatos = {this.cambiarDatosProyecto}
          eliminarProyecto = {this.eliminarProyecto} 
          />
        <Footer user={this.state} cambiarPagina={this.cambiarPagina}/>
      </div>
    );
  }
}

export default App;
