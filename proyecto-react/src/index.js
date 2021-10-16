import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Login from './components/Login';
//import App from './App';
import InterfazGeneral from './components/interfazGeneral'
import Enrutador from './rutas';


ReactDOM.render(
  <React.StrictMode>
    <Enrutador/>
  </React.StrictMode>,
  document.getElementById('root')
);
