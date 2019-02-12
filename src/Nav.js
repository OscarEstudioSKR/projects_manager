import React, { Component } from 'react';
import logoP from './img/logoP.png';
import Buscador from './elements/js/Buscador';


class Nav extends Component {
    render() {
      return (
        <div className="Nav">
            <img src={logoP}/>
            <Buscador />
        </div>
      );
    }
  }
  
  export default Nav;