import React, { Component } from 'react';

import userImg from './img/user_invitado.png';

import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';




class App extends Component {
  constructor(){
    super();
    this.state= {
      pagina: "Proyectos",
      proyectoSeleccionado: -1,
      menu: "",
      cambiarValor: (campo, valor)=>this.setState ({ [campo]: valor }),
      cliente: { 
        nombre: "Invitado",
        imgUser: userImg,
        correo: "",
        proyectos: [],
        equipos: [],
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
    return (
      <div className="App">
        {<Nav user={this.state} cambiarPagina={this.cambiarPagina}/>}
        <Header 
          user={this.state}
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
