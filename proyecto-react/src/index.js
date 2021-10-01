import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
<<<<<<< HEAD
//import Login from './components/Login';
//import App from './App';
import Usuario from './components/Usuario';
=======
import Login from './components/Login';
import App from './App';
import InterfazGeneral from './components/interfazGeneral'
>>>>>>> d94aa007435b9bdb63130f6d86c87c06c980e8b6


ReactDOM.render(
  <React.StrictMode>
    <Usuario/>
    <InterfazGeneral/>
  </React.StrictMode>,
  document.getElementById('root')
);
