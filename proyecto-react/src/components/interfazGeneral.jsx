import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './interfazGeneral.css';
import logo from '../imagenes/logo.png';
import Login from './Login';
import Producto from './Producto';
import ModificacionProductos from './ModificacionProductos';

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
                    <img src={logo} alt="" />
                </div>

                <div className="titulo">
                    <h4></h4>
                </div>

                <div className="lista-componentes">
                    <div className="componente">
                        <h4 className="link-comp"> <a href="">Facturar</a></h4>
                    </div>
                    <div className="componente">
                        <h4 className="link-comp"><a href="">Productos</a></h4>
                    </div>
                    <div className="componente">
                        <h4 className="link-comp"><a href="">Reportes</a></h4>
                    </div>
                </div>
            </div>


            <div className="vista">
                <div className="componente-activo">
                    <h4>InterFaz Ventas</h4>
                </div>
                <div className="vista-componente">

                    <BrowserRouter>
                        <Switch>
                            <Route exact path="/mod" component={ModificacionProductos} />
                            <Route exact path="/" component={Producto} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    );
}

export default InterfazPrincipal;