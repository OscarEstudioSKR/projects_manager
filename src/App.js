import React, { Component } from 'react';

import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';




class App extends Component {
  constructor(){
    super();
    this.state= {
      pagina: "Main",
      cliente: { 
        nombre: "Invitado",
        imgUser: "Invitado",
        correo: ""
      },
    }
  }

  cambiarPagina = (e) => this.setState({ pagina: e });

  render() {
    return (
      <div className="App">
        {<Nav user={this.state} cambiarPagina={this.cambiarPagina}/>}
        <Header user={this.state} cambiarPagina={this.cambiarPagina}/>
        <Footer user={this.state} cambiarPagina={this.cambiarPagina}/>
      </div>
    );
  }
}

export default App;
