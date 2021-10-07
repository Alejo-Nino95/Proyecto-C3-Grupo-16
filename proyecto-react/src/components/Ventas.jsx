import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {
    Table,
    Button,
    Container,
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    ModalFooter,
    InputGroup,
} from "reactstrap";

class App extends React.Component {
    render() {

        return (
            <div className="d-flex flex-row">
            <div className="d-flex flex-column w-50">
                <div>
                    <form>
                        <div className="d-flex flex-row">
                            <InputGroup  type="text" className="form-control" placeholder="Buscar Producto"></InputGroup >
                            <button type="button" className="btn btn-secondary">Añadir</button>
                        </div>
                    </form>
                </div>
                <div>
                    <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">Producto</th>
                            <th scope="col">Valor</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">X</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                </div>
            </div>
            <div class="d-flex w-25">
                <form>
                    <div>
                        <InputGroup  type="text" className="form-control" placeholder="Nombre"></InputGroup >
                        <InputGroup  type="text" className="form-control" placeholder="Correo"></InputGroup >
                        <InputGroup  type="text" className="form-control" placeholder="Documento"></InputGroup >
                        <button type="button" className="btn btn-secondary">Vender</button>
                    </div>
                </form>
            </div>
        </div>
               
        );
    }
}
export default App;

