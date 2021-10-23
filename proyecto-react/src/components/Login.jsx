import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import logo from '../imagenes/logo.png'; 
import axios from 'axios';
import {GoogleLogin, responseGoogle , GoogleLoginResponse }from 'react-google-login';


class Login extends React.Component{
  constructor(props){
    super(props)
  }


  onSuccess = (res) =>{
    this.props.history.push('/main')
  }

  onFailure = (res) =>{
    alert("La autenticacion falló ");
  }

/*

            <input type="text" placeholder="Usuario" value=""/>
            <input type="password"  placeholder="Clave"/>
            <input type="submit" value="Ingresar "/>
*/


  render(){
    return (
      <div className="Login">
        <div className="contenedor-login">
          <h4>Bienvenido</h4>
         <div className="img-lo">
           <img src={logo} alt="" />
         </div>

         <div className="form-login">
           <form action="" onSubmit={this.validarIngreso}>
            
            <h3/>
            <GoogleLogin
                clientId="45218908813-i9kuh9o3j2rhi6sqkf48fiuu9t734ln6.apps.googleusercontent.com"
                buttonText="Login with Google"
                onSuccess={this.onSuccess}
                onFailure={this.onFailure}
                cookiePolicy="single_host_origin"/>
          </form>
         </div>

        </div>
      </div>
    );
  }
}

export default Login;