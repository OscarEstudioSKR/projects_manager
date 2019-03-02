import React, { Component } from 'react';


class Equipos extends Component {
  constructor(props){
    super(props);
    this.state = {
        'nombre': "Nombre",
        'correo': 'Correo',
        'comentario': 'Comentario',
        'img': this.props.user.cliente.imgUser,
    }
  }
    cambiarState( campo, valor ){ this.setState({ [campo]: valor })};
    anadirContacto(contacto){ this.props.user.cliente.contactos.push(contacto) }

    render() {
        let equipos = this.props.user.cliente.equipos;    
        let nuevoContacto = {
            'nombre': this.state.nombre,
            'correo': this.state.correo,
            'comentario': this.state.comentario,
            'img': this.state.img,
        }
       

        return(
            <div className="Equipos-page">
                <div className="titulo-pg-equipos">
                    <span>
                        <h1>Equipos</h1>
                        <p>AÑADE CONTÁCTOS PARA PODER GESTIONAR TUS EQUIPOS</p>
                        <button className="fx-boton">Nuevo contacto</button>
                    </span>
                    
                    <button className="fx-boton">Nuevo equipo</button>
                </div>
                <div className="contenido-pg-equipos">
                    f
                </div>
                <div className="ventana-contacto-nuevo">
                    <img src={this.props.user.cliente.imgUser}/>
                    <input className="botonSinFondo" onChange={()=>this.cambiarState('nombre', this.value)} type="text" value={this.state.nombre}/>
                    <input className="botonSinFondo" onChange={()=>this.cambiarState('correo', this.value)} type="email" value={this.state.correo}/>
                    <textarea className="botonSinFondo" onChange={()=>this.cambiarState('comentario', this.value)} type="text" value={this.state.comentario}/>
                    <button className="fx-boton" >Descartar</button>
                    <button className="fx-boton" onClick={()=>{this.anadirContacto(nuevoContacto)}} >Guardar</button>

                </div>
                
            </div>
        )
    }
}
        
export default Equipos;