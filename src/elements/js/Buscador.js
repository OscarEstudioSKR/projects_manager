import React, { Component } from 'react';
import lupa from '../../img/lupa.png';


class Buscador extends Component {
    render() {
      return (
        <div className="Buscador">
            <img src={lupa}/>
        </div>
      );
    }
  }
  
  export default Buscador;