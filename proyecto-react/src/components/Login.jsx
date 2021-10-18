import React from 'react';
import ReactDOM from 'react-dom';
import './Login.css';
import logo from '../imagenes/logo.png'; 
import axios from 'axios';

class Login extends React.Component{
  constructor(props){
    super(props)
  }


  validarIngreso = () => {

    this.props.history.push('/main')
  }

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
            <input type="text" placeholder="Usuario" value=""/>
            <input type="password"  placeholder="Clave"/>
            <input type="submit" value="Ingresar "/>
            <input type="submit" value="Google "/>
          </form>
         </div>

        </div>
      </div>
    );
  }
}

export default Login;