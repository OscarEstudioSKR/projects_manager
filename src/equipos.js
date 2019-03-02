import React, { Component } from 'react';


class Equipos extends Component {
  constructor(props){
    super(props);
  }

    render() {
        let equipos = this.props.user.cliente.equipos;

        return(
            <div className="Equipos-page">
                <div className="titulo-pg-equipos">
                    <h1>Equipos</h1>
                    <p>CREA EQUIPOS PARA FACILITAR LA GESTIÓN DE TUS PROYECTOS</p>
                    <button className="fx-boton">Nuevo Equipo</button>
                </div>
                <div className="contenido-pg-equipos">
                    f
                </div>
            </div>
        )
    }
}
        
export default Equipos;