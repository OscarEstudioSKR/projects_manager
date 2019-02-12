import React, { Component } from 'react';
import lupa from '../../img/lupa.png';


class Buscador extends Component {

    constructor(props){
      super(props);
      this.state= {
        search: "",
      }
    }
    onChange(e){
      this.setState({
        search: e.target.value,
      })
    }

    buscador(e){
      console.log("buscar: "+this.state.search);
      e.preventDefault();
    }

    render() {
      return (
        <div className="Buscador">
          <button 
            onClick={this.buscador.bind(this)}>
              <img src={lupa}/>
          </button>
          <input 
            name="input-search-name" 
            value={this.state.search} 
            id="input-search"
            onChange= {this.onChange.bind(this)} 
            placeholder="Buscador..." />   
        </div>
      );
    }
  }
  
  export default Buscador;