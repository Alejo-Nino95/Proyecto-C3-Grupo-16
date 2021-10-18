import React from 'react';
import ReactDOM from 'react-dom';
import './interfazGeneral.css';
import logo from '../imagenes/user2.jpg'; 
import Login from './Login';
import Ventas from './Ventas';
import Producto from './Producto';
import Usuario from './Usuario'; 
import ModificacionProductos from './ModificacionProductos'
import Bienvenida from './com-welcome/bienvenida';
import { Link } from 'react-router-dom';



/*  ----------------------------------------------------------------------------------------------
 *
 * El objetivo de esta pantalla es proveer una interfaz de acceso comun a los demas elementos
 * Este componente podra renderizar dentro los demas componentes necesarios para la vista 
 * importanto los respectivos modulos de acceso 
 * 
 * @ Julian Guillermo Zapata Rugeles 
 * 
 *  ----------------------------------------------------------------------------------------------
 */ 




class InterfazPrincipal extends React.Component{
    constructor(propiedaades){
        super(propiedaades)
        this.state={
            componenteActivo:<Bienvenida/>
        }

    }


    cargarInicio = () =>{
        this.setState({
            componenteActivo:<Bienvenida/>
        })
    }

    cargarUsuarios = () =>{
        this.setState({
            componenteActivo:<Usuario/>
        })
    }

    cargarProductos = () =>{
        this.setState({
            componenteActivo:<Producto/>
        })
    }

    cargarVentas = () =>{
        this.setState({
            componenteActivo:<Ventas/>
        })
    }

    salirInterfaz = () => {
        document.location.href = "/"
    }


    render(){
        return(
            <div className="interfaz-principal">
            <div className="items">
                  <div className="img-login">
                       <img className="user-img" src={logo} alt=""/>
                  </div> 
  
                  <div className="titulo">
                       <h4></h4>
                  </div>
  
                  <div className="lista-componentes">



                     <div className="componente">
                          <h4 className="link-comp">
                             <button className="btn-comp" onClick={this.cargarInicio}>  Inicio </button>
                          </h4>
                      </div>


                      <div className="componente">
                          <h4 className="link-comp">
                             <button className="btn-comp" onClick={this.cargarUsuarios}> Usuarios </button>
                          </h4>
                      </div>
  
  
                      <div className="componente">
                          <h4 className="link-comp">
                                <button  className="btn-comp" onClick={this.cargarProductos}> Productos </button>
                          </h4>
                      </div>
  
  
                      <div className="componente">
                          <h4 className="link-comp">
                             <button  className="btn-comp" onClick={this.cargarVentas}> Ventas </button>
                          </h4>
                      </div>


                      <div className="componente">
                          <h4 className="link-comp">
                             <button  className="btn-comp" onClick={this.salirInterfaz}> Salir </button>
                          </h4>
                      </div>
  
                  </div>
            </div>
  
  
  
            <div className="vista">
                   <div className="vista-componente">
                        { this.state.componenteActivo }
                   </div>
            </div>
        </div>
        )
    }
}


  export default InterfazPrincipal;