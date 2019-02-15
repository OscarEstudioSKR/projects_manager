import React, { Component } from 'react';
import icono1 from './img/icono1.png';
import icono2 from './img/icono2.png';
import icono3 from './img/icono3.png';
import redes1 from './img/redes1.png';
import redes2 from './img/redes2.png';
import redes3 from './img/redes3.png';
import redes4 from './img/redes4.png';
import tick from './img/checkImg.png';


class Footer extends Component {
  
    constructor(props){
      super(props);
      this.state = {
        formName: this.props.user.nombre === "Invitado" ? "" : this.props.user.nombre,
        formMail: this.props.user.correo,
        formMensaje: "",
        formEnviado: false,
        cerrarFormulario: ()=> this.setState({ formEnviado: false, formMensaje: "" }),
      }
    }

    cambiar(e){
      this.setState({
        [e.target.name]: e.target.value,
      })
    }

    enviarDatos(e){
      e.preventDefault();
      if(this.validarFormulario()){
        
        return;
      }
      this.setState({ formEnviado: true });
      console.log(JSON.stringify(this.state));
      
    }

    validarFormulario(){
      if(this.state.formMensaje.length>0){
        return false;
      }else{
        alert("No has introducido ningún mensaje. Por favor rellene el campo mensaje para poder completar el envio, gracias.");
        return true;}
    }

    FormularioEnviado(e){
      let nombreGenerado = e.user.formMail;
      let nombre = nombreGenerado.replace(/@.*/i,"").toUpperCase();
      return(
        <div className="respuesta-formulario">
          <div>
            <img src={tick} className="imp-tick-formulario" />
            <strong>Mensaje enviado</strong>
          </div>
          <p>
            {e.user.formName ==="" ? "Gracias " + nombre : "Gracias " + e.user.formName.toUpperCase()}, tu mensaje ha sido enviado correctamente.<br /> Te responderemos en breve al correo {e.user.formMail}.
          </p>
          <button onClick={e.user.cerrarFormulario}>Nuevo mensaje</button>
        </div>
      )
    }


    render() {
      return (
        <div className="Footer" id="Footer">
            <div className="footer-1">
              <h4>CREA UN NUEVO PROYECTO</h4>
              <p className="descripcion-ayuda">Busca en el navegador el botón de añadir para iniciar un nuevo proyecto o accede a uno ya creado a través de la pestaña Proyectos.</p>
              <div className="cont-textImg"><img src={icono1}/><p className="tituloChico">Gestiona equipos</p></div>
              <div className="cont-textImg"><img src={icono2}/><p className="tituloChico">Crea proyectos</p></div>
              <div className="cont-textImg"><img src={icono3}/><p className="tituloChico">Planifica tareas</p></div>
              
              <form className="form-contacto-footer">
                {this.state.formEnviado === false ? 
                  [<h3 className="label-title">Contácta con nosotros</h3>,
                  <input name="formName" value={this.state.formName} onChange={this.cambiar.bind(this)} className="input-text" placeholder="Nombre" type="text" />,
                  <input name="formMail" value={this.state.formMail} onChange={this.cambiar.bind(this)} className="input-text" placeholder="Correo" type="email" required />,
                  <input name="formMensaje" value={this.state.formMensaje} onChange={this.cambiar.bind(this)} className="input-area" placeholder="Mensaje" type="text" required />,
                  <button className="boton-azul" onClick={this.enviarDatos.bind(this)}>Enviar</button>]:
                <this.FormularioEnviado user={this.state}/>}
              </form>
              
            </div>
            <div className="footer-2">
              <div className="contenedor-footer2">
                <div className="div-corto"><strong className="texto-medio">PROJECT MANAGER</strong><br /><br />Gestiona proyectos, crea equipos y distribuye los trabajos en el panel de tareas. Organiza tus proyectos de la manera más completa y eficaz.</div> 
                <div className="div-corto"><strong>Estudio SKR</strong><br />Proyecto generado por Oscar Aparisi para el Estudio SKR.</div> 
                <div className="div-corto cont-logo-redes">
                  <img src={redes1}/>
                  <img src={redes2}/>
                  <img src={redes3}/>
                  <img src={redes4}/>
                </div> 
                <div className="contenedor-enlaces-footer">
                  <a><strong>estudio skr</strong></a>
                  <a><strong>github</strong></a>
                  <a><strong>proyectos</strong></a>
                  <a><strong>términos</strong></a>
                  <a><strong>contácto</strong></a>
                </div> 
              </div>        
            </div>
            
        </div>
      );
    }

  }
  
  export default Footer;