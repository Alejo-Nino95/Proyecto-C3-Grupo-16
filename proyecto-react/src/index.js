import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Login from './components/Login';
//import App from './App';
import Usuario from './components/Usuario';
import InterfazGeneral from './components/interfazGeneral';

ReactDOM.render(
  <React.StrictMode>
    <Usuario/>
    <InterfazGeneral/>
  </React.StrictMode>,
  document.getElementById('root')
);
