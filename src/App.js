import React, { Component } from 'react';

import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';




class App extends Component {
  constructor(){
    super();
    this.state= {
      user: {
        nombre: "Invitado",
        imgUser: "Invitado",
      },
    }
  }

  render() {
    return (
      <div className="App">
        <Nav user={this.state.user}/>
        <Header user={this.state.user}/>
        <Footer user={this.state.user}/>
      </div>
    );
  }
}

export default App;
