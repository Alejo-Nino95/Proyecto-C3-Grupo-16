import React from "react";
//import logo from "./logo.svg";
import "./Usuario.css";
<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
=======
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
>>>>>>> d94aa007435b9bdb63130f6d86c87c06c980e8b6
//https://www.youtube.com/watch?v=F4MdhfMn2vs

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

const data = [
  { id: 12345678, personaje: "Naruto", anime: "Naruto" },
  { id: 2, personaje: "Goku", anime: "Dragon Ball" },
  { id: 3, personaje: "Kenshin Himura", anime: "Rurouni Kenshin" },
  { id: 4, personaje: "Monkey D. Luffy", anime: "One Piece" },
  { id: 5, personaje: "Edward Elric", anime: "Fullmetal Alchemist: Brotherhood"},
  { id: 6, personaje: "Seto Kaiba", anime: "Yu-Gi-Oh!" },
];

class App extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id : "",
      Nombre: "",
      Apellido: "",
    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

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
        arreglo[contador].personaje = dato.personaje;
        arreglo[contador].anime = dato.anime;
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
    valorNuevo.id=this.state.data.length+1;
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

<<<<<<< HEAD
   toggleMenu= ()=>{
    let toggle= document.querySelector('.toggle');
    let navigation = document.querySelector('.navigation');
    let main = document.querySelector('.main');
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
    main.classList.toggle('active');
 }


=======
>>>>>>> d94aa007435b9bdb63130f6d86c87c06c980e8b6
  render() {
    
    return (
      <>
<<<<<<< HEAD
        <div class="container">
       <div class="navigation">
         <ul>
             <li>
                <a href="#">
                <span class="icon"><i class="fa fa-hashtag" aria-hidden="true"></i></span>
                <span class="title">Numer016</span>
                </a> 
             </li>
             <li>
                <a href="#">
                <span class="icon"><i class="fa fa-home" aria-hidden="true"></i></span>
                <span class="title">Dashboard</span>
                </a>
            </li>
            <li>
                <a href="#">
                <span class="icon"><i class="fa fa-user-circle" aria-hidden="true"></i></span>
                <span class="title">Usuarios</span>
                </a>
            </li>
            <li>
                <a href="#">
                <span class="icon"><i class="fa fa-comment" aria-hidden="true"></i></span>
                <span class="title">Mensajes</span>
                </a>
            </li>
            <li>
                <a href="#">
                <span class="icon"><i class="fa fa-info" aria-hidden="true"></i></span>
                <span class="title">Ayuda</span>
                </a>
            </li>
            <li>
                <a href="#">
                <span class="icon"><i class="fa fa-cog" aria-hidden="true"></i></span>
                <span class="title">Configuracion</span>
                </a>
            </li>
            <li>
                <a href="#">
                <span class="icon"><i class="fa fa-key" aria-hidden="true"></i></span>
                <span class="title">ContraseÃ±a</span>
                </a>
            </li>
            <li>
                <a href="#">
                <span class="icon"><i class="fa fa-times" aria-hidden="true"></i>
                </span>
                <span class="title">Salir</span>
                </a>
            </li>
         </ul>   
       </div>

       <div class="main">
           <div class="topbar">
               <div class="toggle" onClick={()=>this.toggleMenu()}></div>
               
               <div class="search">
                  <label>
                    <i class="fa fa-search" aria-hidden="true"></i>
                    <input type="text" placeholder="Search here" />
                       
                  </label>
                   
                </div>
              
               <div class="user">
                <img src="user.jpg" />
               </div>
           </div>
           <div class ="cardBox">
               <div class="card">
               <Container>
          <div>Interfaz de Usuario</div>
=======
        <Container>
>>>>>>> d94aa007435b9bdb63130f6d86c87c06c980e8b6
        <br />
          <Button color="success" onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          <br />
          <br />
          <Table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo</th>
                <th>Acción</th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.personaje}</td>
                  <td>{dato.anime}</td>
<<<<<<< HEAD
                  <td>{dato.correo}</td>
                  
=======
>>>>>>> d94aa007435b9bdb63130f6d86c87c06c980e8b6
                  <td>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                  </td>
                </tr>
<<<<<<< HEAD
                
=======
>>>>>>> d94aa007435b9bdb63130f6d86c87c06c980e8b6
              ))}
            </tbody>
          </Table>
        </Container>

<<<<<<< HEAD
               </div>
           </div>



       </div>

   </div>
   


=======
>>>>>>> d94aa007435b9bdb63130f6d86c87c06c980e8b6
        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="personaje"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.personaje}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Apellido: 
              </label>
              <input
                className="form-control"
                name="anime"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.anime}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Insertar Personaje</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Nombre: 
              </label>
              <input
                className="form-control"
                name="personaje"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Apellido: 
              </label>
              <input
                className="form-control"
                name="anime"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default App;