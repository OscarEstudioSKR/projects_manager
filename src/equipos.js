import React, { Component } from 'react';


class Equipos extends Component {
  constructor(props){
    super(props);
    this.state = {
        'nombre': "Nombre",
        'correo': 'Correo',
        'comentario': 'Comentario',
        'img': this.props.user.cliente.imgUser,
        'ventana': '',
        
    }
  }
    cambiarState( event ){ this.setState({ [event.target.name]: event.target.value })};
    cerrarVentan(){ this.setState({ ventana: '' })};
    abrirVentana(value){ this.setState({ ventana: value })};
    anadirContacto(contacto){ this.props.user.cliente.contactos.push(contacto); this.cerrarVentan(); }

    render() {
        let equipos = this.props.user.cliente.equipos;           

        return(
            <div className="Equipos-page">
                <div className="titulo-pg-equipos">
                    <span>
                        <h1>Equipos</h1>
                        <p>AÑADE CONTÁCTOS PARA PODER GESTIONAR TUS EQUIPOS</p>
                        <button onClick={this.abrirVentana.bind(this, 'nuevoContacto')} className="fx-boton">Nuevo contacto</button>
                    </span>
                    
                    <button className="fx-boton">Nuevo equipo</button>
                </div>
                <div className="contenido-pg-equipos">
                    f
                </div>
                {this.state.ventana==='nuevoContacto' && 
                    <div className="ventana-contacto-nuevo">
                        <img src={this.props.user.cliente.imgUser}/>
                        <input className="botonSinFondo" onChange={this.cambiarState.bind(this)} name='nombre' type="text" value={this.state.nombre}/>
                        <input className="botonSinFondo" onChange={this.cambiarState.bind(this)} name='correo' type="email" value={this.state.correo}/>
                        <textarea className="botonSinFondo" onChange={this.cambiarState.bind(this)} name='comentario' type="text" value={this.state.comentario}/>
                        <button className="fx-boton" onClick={this.cerrarVentan.bind(this)}>Descartar</button>
                        <button className="fx-boton" onClick={()=>{
                            this.anadirContacto({
                                'nombre':this.state.nombre,
                                'correo':this.state.correo,
                                'comentario': this.state.comentario,
                                'img': this.state.img
                            });}} >Guardar</button>

                    </div>
                }
                
                
            </div>
        )
    }
}
        
export default Equipos;