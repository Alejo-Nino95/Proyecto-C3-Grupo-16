
import React, { Component } from "react";
import { BrowserRouter as Router , Route , Switch } from "react-router-dom";
import InterfazPrincipal from "./components/interfazGeneral";
import Login from "./components/Login";
import ModificacionProductos from "./components/ModificacionProductos";
import Peticiones from "./components/axios/axios";



export default function Enrutador(){
   return(
    <Router>
        <Switch>
            <Route exact path = "/" component={ Login }/>
            <Route exact path = "/main" component={InterfazPrincipal}/>
            <Route exact path = "/modificacion" component={ModificacionProductos}/>
        </Switch>
    </Router>
   )
}