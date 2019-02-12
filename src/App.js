import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import Footer from './Footer';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
