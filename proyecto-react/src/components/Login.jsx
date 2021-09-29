import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import logo from '../imagenes/logo.png'; 

function Login() {
    return (
      <div className="Login">
        <div className="contenedor-login">

         <div className="img-login">
           <img src={logo} alt="" />
         </div>

         <div className="form-login">
           <form action="">
            <input type="text" placeholder="Usuario" />
            <input type="password"  placeholder="Clave"/>
          </form>
         </div>

        </div>
      </div>
    );
  }
  
  export default Login;