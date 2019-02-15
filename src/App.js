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

  render() {
    return (
      <div className="App">
        <Nav user={this.state}/>
        <Header user={this.state}/>
        <Footer user={this.state}/>
      </div>
    );
  }
}

export default App;
