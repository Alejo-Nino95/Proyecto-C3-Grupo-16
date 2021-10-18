import React from "react";
//import logo from "./logo.svg";
import "./Usuario.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
         users: [] ,
  }
  }
  
  componentDidMount() {
    axios.get('http://localhost:5000/empleados')
      .then(response => this.setState({ users: response.data }))
  }
  



  renderUsers() {
    const { users } = this.state
    return users.map( user => (
        <tr  key={user.id_usuario}>
           <td> {user.id_usuario}       </td>
           <td> {user.nombre_usuario}   </td>
           <td> {user.correo_usuario}   </td>
           <td> {user.telefono_usuario} </td>
           <td> {user.rol_usuario }     </td>
           <td> {user.estado_usuario }  </td>
        </tr>
    ))
  }
  
  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].nombre = dato.nombre;
        arreglo[contador].apellido = dato.apellido;
        arreglo[contador].correo = dato.correo;
        arreglo[contador].rol = dato.rol;
        arreglo[contador].estado = dato.estado;
       
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };



  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.lenght+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }



  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>
        <Container>
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Telefono</th>
                <th>Rol</th>
                <th>Estado</th>
                <th>Acción</th>
              </tr>
            </thead>
            
            <tbody>
             { this.renderUsers() }
            </tbody>
          </Table>
        </Container>
      </>
    );
  }
}
export default App;

/**/