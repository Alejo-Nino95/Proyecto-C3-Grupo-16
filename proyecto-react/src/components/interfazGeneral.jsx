import React from 'react';
import ReactDOM from 'react-dom';
import './interfazGeneral.css';
import logo from '../imagenes/logo.png'; 
import Login from './Login';
import Ventas from './Ventas';
import Producto from './Producto';
import Usuario from './Usuario'; 

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


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
          <Router>
              
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
                            <Link to="/usuarios">
                                     <h4>usuarios</h4>
                            </Link>
                        </h4>
                    </div>


                    <div className="componente">
                        <h4 className="link-comp">
                            <Link to="/productos">
                                     <h4>Productos</h4>
                            </Link>
                        </h4>
                    </div>


                    <div className="componente">
                        <h4 className="link-comp">
                            <Link to="/ventas">
                                     <h4>Ventas</h4>
                            </Link>
                        </h4>
                    </div>

                </div>
          </div>


          <div className="vista">
                 <div className="vista-componente">
                     
                        <Switch>

                            <Route path="/login">
                                <Login/>
                            </Route>

                            <Route path="/productos">
                                <Producto/>
                            </Route>

                            <Route path="/usuarios">
                                <Usuario/>
                            </Route>

                            <Route path="/ventas">
                                <Ventas/>
                            </Route>

                        </Switch>
                     
                 </div>
          </div>
          </Router>
      </div>
    );
  }
  
  export default InterfazPrincipal;