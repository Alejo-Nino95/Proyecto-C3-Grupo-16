import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import logo from '../imagenes/logo.png'; 

function Login() {
    return (
      <div className="Login">
        <div className="contenedor-login">
          <h4>Bienvenido</h4>
         <div className="img-login">
           <img src={logo} alt="" />
         </div>

         <div className="form-login">
           <form action="">
            <input type="text" placeholder="Usuario" />
            <input type="password"  placeholder="Clave"/>
            <input type="submit" value="Ingresar "/>
            <input type="submit" value="Google "/>
          </form>
         </div>

        </div>
      </div>
    );
  }
  
  export default Login;