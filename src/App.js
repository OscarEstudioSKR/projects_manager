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
    let todos = this.state.cliente.proyectos.push(e);
    this.setState({ proyectos: todos });}

  render() {
    return (
      <div className="App">
        {<Nav user={this.state} cambiarPagina={this.cambiarPagina}/>}
        <Header user={this.state} cambiarPagina={this.cambiarPagina} nuevoProyecto={this.nuevoProyecto}/>
        <Footer user={this.state} cambiarPagina={this.cambiarPagina}/>
      </div>
    );
  }
}

export default App;
