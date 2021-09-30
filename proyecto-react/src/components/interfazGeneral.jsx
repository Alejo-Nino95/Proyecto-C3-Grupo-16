import React from 'react';
import ReactDOM from 'react-dom';
import './interfazGeneral.css';
import logo from '../imagenes/logo.png'; 
import Login from './Login';

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
                     <h4>GRUPO 16 VENTAS</h4>
                </div>

                <div className="lista-componentes">
                    <div className="componente">
                        <h4>Accion 1</h4>
                    </div>
                    <div className="componente">
                        <h4>Accion 2</h4>
                    </div>
                    <div className="componente">
                        <h4>Accion 3</h4>
                    </div>
                </div>
          </div>


          <div className="vista">
                 <div className="componente-activo">
                     <h4>EN ESTA SECCION APARECERA EL COMPONENTE SELECCIONADO</h4>
                 </div>
                 <div className="vista-componente">
                     <Login></Login>
                 </div>
          </div>
      </div>
    );
  }
  
  export default InterfazPrincipal;