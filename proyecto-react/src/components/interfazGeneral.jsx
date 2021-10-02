import React from 'react';
import ReactDOM from 'react-dom';
import './interfazGeneral.css';
import logo from '../imagenes/logo.png'; 
import Login from './Login';
import Ventas from './Ventas';

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



function InterfazPrincipal() {
    return (
      <div className="interfaz-principal">

          <div className="items">
                <div className="img-login">
                     <img src={logo} alt=""/>
                </div> 

                <div className="titulo">
                     <h4></h4>
                </div>

                <div className="lista-componentes">
                    <div className="componente">
                        <h4 className="link-comp"> <a href="">Usuarios</a></h4>
                    </div>
                    <div className="componente">
                        <h4 className="link-comp"><a href="">Productos</a></h4>
                    </div>
                    <div className="componente">
                        <h4 className="link-comp"><a href="">Ventas</a></h4>
                    </div>
                </div>
          </div>


          <div className="vista">
                 <div className="componente-activo">
                     <h4>InterFaz Ventas</h4>
                 </div>
                 <div className="vista-componente">
                     <Ventas/>
                 </div>
          </div>
      </div>
    );
  }
  
  export default InterfazPrincipal;