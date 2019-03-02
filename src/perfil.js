import React, { Component } from 'react';


class Perfil extends Component {
  constructor(props){
    super(props);
    this.cambiarFiltro = this.cambiarFiltro.bind(this);
    this.state = {
        filtroSelected: 0,
    }
  }
    cambiarFiltro(boton) { this.setState ({ filtroSelected: boton }) }

    render() {

        let styleSelected = (boton)=>{
            let style = { 'color': 'var(--color5)' }
            if(this.state.filtroSelected === boton) {
                style = {
                    'color': 'var(--color1)',
                    'borderBottom': '2px solid var(--color4)',
                }
            }
            return style;
        }
        
        

        return(
            <div className="ProyectosPage">
                <div className="proyectosPage-div1">
                    <div className="recuadro-img-logo">
                        <img src={this.props.user.cliente.imgUser} className="img-logo-g"/>
                        <header className="titulo-proyecto-info">
                            {this.props.user.cliente.nombre.toUpperCase()}
                        </header>         
                    </div>
                </div>
                <div className="proyectosPage-div2">
                    <div className="boton-100  linia-end">
                        <button className="fx-boton texto-1 botonSinFondo" style={styleSelected(0)} onClick={ ()=>this.cambiarFiltro(0)} >TODO</button>
                        <button className="fx-boton texto-1 botonSinFondo" style={styleSelected(1)} onClick={ ()=>this.cambiarFiltro(1)} >PROYECTOS</button>
                        <button className="fx-boton texto-1 botonSinFondo" style={styleSelected(2)} onClick={ ()=>this.cambiarFiltro(2)} >EQUIPOS</button>
                        <button className="fx-boton texto-1 botonSinFondo" style={styleSelected(3)} onClick={ ()=>this.cambiarFiltro(3)} >CONTÁCTOS</button>
                    </div>
                    <div className="proyectosPage-div2-contenido">
                    {(this.state.filtroSelected === 0 || this.state.filtroSelected === 1) && <this.ProyectosList user={this.props.user} />}
                    {(this.state.filtroSelected === 0 || this.state.filtroSelected === 2) && <this.EquiposList user={this.props.user} />}
                    {(this.state.filtroSelected === 0 || this.state.filtroSelected === 3) && <this.ContactosList user={this.props.user} />}
                    
                    </div>
                </div>
                
            </div>
        )
    }

    ProyectosList(e){
        let proyectos = e.user.cliente.proyectos;
        let irProyecto = (id)=>{
            e.user.cambiarValor("proyectoSeleccionado", id);
            e.user.cambiarValor("pagina", "Proyectos");
        }
        return(
            proyectos.length != 0 ?
                proyectos.map((obj)=>{
                    return (
                        <div className="proyecto-caja">
                            <h2>{obj.nombre}</h2>
                            <button onClick={() => irProyecto(obj.id)}>Ir</button>
                            <p>{obj.descripcion}</p>
                            <div>
                                { obj.equipo.map( ( equipo ) => { return <img src={equipo.img}/> } ) }
                            </div>
                        </div>)
                })
                :<div>No tienes proyectos</div>
        )
    }

    EquiposList(e){
        let contactos = e.user.cliente.contactos;
        return(
            <div className="contactos-caja">
                {contactos.map((equipos) => {
                    return(
                        <div>{equipos.nombreEquipo}</div>
                    )
                })}
            </div>
        )
    }
    ContactosList(e){
        return(
            <div>
                Contáctos
            </div>
        )
    }
}
        
        
export default Perfil;